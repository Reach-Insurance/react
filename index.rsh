'reach 0.1';

//REF: REACH ARCHITECTURE: https://docs.reach.sh/rsh/#ref-programs

export const main = Reach.App(() => {
    const Insurer = Participant('Insurer', {
        mandatoryEntryFee: UInt,
        communityGroupName: Bytes(60),
        contractIsRunning: Bool,
        //approveNewMembership: Fun([Address], Null),
        createInvoices: Fun([], Null),
        moveMaturedPayments: Fun([], Null),
        saveNewMemberDetails: Fun([Object({
            fullName: Bytes(60), phone: Bytes(20), email: Bytes(60), chosenInsurancePackage: UInt
        })], Null),
        saveNewClaim: Fun([Object({ amountRequested: UInt })], Null),
        notifyMembersAboutNewClaim: Fun([Object({
            ownerAddr: Address,
            amountRequested: UInt,
            description: Bytes(600),
            supportDocuments: Bytes(100)
        })], Null),
        seeFeedback: Fun([], Null),
        notifyFundedMember: Fun([Address], Null),
        stopContract: Fun([], Null),
        log: Fun(true, Null) //REF: https://docs.reach.sh/guide/logging/
    });

    const CommunityMember = API('CommunityMember', {
        registerMembership: Fun([Object({ fullName: Bytes(60), phone: Bytes(20), email: Bytes(60), chosenInsurancePackage: UInt })], Bool),
        payMonthlyFee: Fun([Object({ who: Address, mfee: UInt })], Bool),
        createClaim: Fun([Object({ amountRequested: UInt, amountSet: UInt, accepted: Bool, approvalsCount: UInt, sumOfSetAmounts: UInt, insrPackageId: UInt, amountDue: UInt, matureBalance: UInt, fundLimit: UInt })], Bool),
        respondToClaim: Fun([Object({
            claimant: Address, accepted: Bool, setAmount: UInt
        })], Bool),
        //changePackage: Fun([Bytes(60)], Bool),
        stopContract: Fun([], Bool)
    });
    init();

    //REF: REACH ARCHITECTURE: https://docs.reach.sh/rsh/#ref-programs

    Insurer.only(() => {
        const mandatoryEntryFee = declassify(interact.mandatoryEntryFee);
        const contractIsRunning = declassify(interact.contractIsRunning);
        interact.seeFeedback();
    });
    Insurer.publish(mandatoryEntryFee, contractIsRunning);
    const invariantCondition = true;
    commit();
    Insurer.publish();

    //keep a list of all members' Addresses,
    //more info about the members is kept away (in the db).
    const registeredMembers = new Set();

    //claim shape
    const insuranceClaims = new Map(Object({
        amountRequested: UInt, amountSet: UInt, accepted: Bool, approvalsCount: UInt, sumOfSetAmounts: UInt
    }));

    //details of members with open claims are kept close, 
    //other members are kept away from here (in the db)
    const claimOwners = new Map(Object({
        //fullName: Bytes(60),
        //physicalAddress: Bytes(100),
        insrPackageId: UInt,
        //dateJoined: Bytes(30),
        amountDue: UInt,
        matureBalance: UInt
    }));


    const [
        membersCount,
        claimsCount
    ] = parallelReduce([1, 1])
        .define(() => {
            //the "readFromMap" function below can be passed to maybe(...) function to 
            //get the value from a mayBe which is returned by a Map of objects
            //Example:   maybe(myMapOfObjects[forWho], 0, readFromMap(objectKey) )
            //will return the value of the specified object key if the map contains 
            // an object at its "forWho" key. if the key doesnt exist in the map, it will return 0 
            const readFromMap = (key) => { return (objectInMapInstance) => { return objectInMapInstance[key]; }; };
        })
        .invariant(invariantCondition)
        .while(contractIsRunning)
        //.case(Insurer,                  //PART_EXPR
        //    () => {const _ = true},     //PUBLISH_EXPR
        //    (_) => 0,                   //PAY_EXPR
        //    ()=>{
        //                                //CONSENSUS_EXPR
        //    })
        .api(CommunityMember.registerMembership,
            (_) => { const _ = true; },
            (_) => mandatoryEntryFee,
            ((newMemberDetails, sendResponse) => {
                const who = this;
                sendResponse(true);
                Insurer.interact.log("backend: Insurer.interact.saveNewMemberDetails(newMemberDetails) ...");
                Insurer.interact.saveNewMemberDetails(newMemberDetails);
                Insurer.interact.log("backend: done.");
                transfer(mandatoryEntryFee).to(Insurer);

                //add member's address to the list of addresses
                registeredMembers.insert(who);

                return [membersCount + 1, claimsCount];
            })
        ).api(CommunityMember.payMonthlyFee,
            (_) => { const _ = true; },
            (ob) => ob.mfee,
            ((ob, sendResponse) => {
                sendResponse(true);
                //deposit into the treasury account
                transfer(ob.mfee).to(Insurer);
                return [membersCount, claimsCount];
            })
        ).api(CommunityMember.createClaim,
            (_) => { const _ = true; },
            (_) => 0,
            ((claimInfo, sendResponse) => {
                const who = this;
                //TODO: require(registeredMembers.member(who), "Only registered members can create claims.");
                Insurer.interact.saveNewClaim({ amountRequested: claimInfo.amountRequested });

                //add the details to the map of current claim owners
                claimOwners[who] = {
                    insrPackageId: claimInfo.insrPackageId,
                    amountDue: claimInfo.amountDue,
                    matureBalance: claimInfo.matureBalance
                };

                const fundLimitt = claimInfo.fundLimit;

                const claimAmount = claimInfo.amountRequested >= fundLimitt ? claimInfo.amountRequested : fundLimitt;
                insuranceClaims[who] = { amountRequested: claimInfo.amountRequested, amountSet: claimAmount, accepted: false, approvalsCount: 0, sumOfSetAmounts: claimInfo.amountRequested };
                sendResponse(true);

                //change mode from "concensus step" to "step"
                commit();
                //now change mode back to "concensus step" and pay for the claimant.
                Insurer.pay(claimAmount);

                return [membersCount, claimsCount + 1];
            })
        ).api(CommunityMember.respondToClaim,
            (_) => { const _ = true; },
            (_) => 0,
            ((opinion, sendResponse) => {
                const who = this;
                const forWho = opinion.claimant;
                sendResponse(true);

                if (opinion.accepted) {
                    const approvalsCnt = maybe(insuranceClaims[forWho], 1, readFromMap("approvalsCount"));
                    const sumOfSetAmts = maybe(insuranceClaims[forWho], 0, readFromMap("sumOfSetAmounts"));
                    const amtRqsted = maybe(insuranceClaims[forWho], 0, readFromMap("amountRequested"));
                    const amtSet = maybe(insuranceClaims[forWho], amtRqsted, readFromMap("amountSet"));
                    const agreedClaimAmount = (approvalsCnt < 5) ? amtSet : sumOfSetAmts / approvalsCnt;
                    insuranceClaims[forWho] = {
                        approvalsCount: approvalsCnt + 1,
                        amountSet: agreedClaimAmount,
                        accepted: true,
                        amountRequested: amtRqsted,
                        sumOfSetAmounts: sumOfSetAmts
                    };

                    if (approvalsCnt >= 5) {
                        //transfer(agreedClaimAmount).to(forWho);

                        //eliminate the member from the list of claim owners (membersWithClaims)
                        delete claimOwners[forWho];

                        //eliminate the claim from the list of open claims (openClaims)
                        delete insuranceClaims[forWho];

                        //Notify the funded member
                        Insurer.interact.notifyFundedMember(forWho);
                    }
                }

                return [membersCount, claimsCount];
            })
        ).api(CommunityMember.stopContract,
            () => { const _ = true; },
            () => 0,
            ((sendResponse) => {
                //this must be done by the deployer of the contract only.
                const who = this;
                //TODO: require(who == Insurer, "You are not allowed to take this action.");
                Insurer.interact.stopContract();

                sendResponse(true);
                //FUTURE IMPROVEMENT: ensure that the deployer/Insurer does not have authority over the platform.
                //ensure that he first get permission from members to stop the contract.
                //ensure there are clearly agreed rules for non participation on this matter.

                return [membersCount, claimsCount];
            })
        );

    //cleanup: send all pending funds to the insurer (if any)
    transfer(balance()).to(Insurer);

    //terminate the concensus step
    commit();

    exit();
});

//REF:
//follow example:  https://github.com/reach-sh/reach-lang/blob/master/examples/rsvp/index.rsh
//invariants info: https://en.wikipedia.org/wiki/Loop_invariant
//TODO: use IPFS:  https://www.freecodecamp.org/news/technical-guide-to-ipfs-decentralized-storage-of-web3/
//to use supabase: https://supabase.com/docs/reference/javascript/delete


