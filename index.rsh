'reach 0.1';

export const main = Reach.App(() => {
    const Insurer = Participant('Insurer', {
        mandatoryEntryFee: UInt,
        communityGroupName: Bytes(60),
        contractIsRunning: Bool,
        //approveNewMembership: Fun([Address], Null),
        createInvoices: Fun([], Null),
        moveMaturedPayments: Fun([], Null),
        saveNewMemberDetails: Fun([Object({
            fullName: Bytes(60), phone: Bytes(20), email: Bytes(60), chosenInsurancePackage: Bytes(60)
        })], Null),
        saveNewClaim: Fun([Object({ claimant: Address, amountRequested: UInt })], Null),
        notifyMembersAboutNewClaim: Fun([Object({
            ownerAddr: Address,
            amountRequested: UInt,
            description: Bytes(600),
            supportDocuments: Bytes(100)
        })], Null),
        seeFeedback: Fun([], Null)
    });

    const CommunityMember = API('CommunityMember', {
        registerMembership: Fun([Object({ fullName: Bytes(60), phone: Bytes(20), email: Bytes(60), chosenInsurancePackage: Bytes(60) })], Bool),
        payMonthlyFee: Fun([Object({ who: Address, mfee: UInt })], Bool),
        createClaim: Fun([Object({ claimant: Address, amountRequested: UInt, amountSet: UInt, accepted: Bool, approvalsCount: UInt, sumOfSetAmounts: UInt })], Bool),
        respondToClaim: Fun([Object({
            claimant: Address, accepted: Bool, setAmount: UInt
        })], Bool),
        //changePackage: Fun([Bytes(60)], Bool),
        stopContract: Fun([], Bool)
    });
    init();

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
    ] = parallelReduce([0, 0])
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
        .api(CommunityMember.registerMembership,
            (_) => { const _ = true; },
            (_) => mandatoryEntryFee,
            ((newMemberDetails, sendResponse) => {
                const who = this;
                //the registering member must have enough credit on their account to pay the entry fee.
                //require(balance(who) >= mandatoryEntryFee, `Entry fee cannot be less than ${mandatoryEntryFee}`);
                Insurer.interact.saveNewMemberDetails(newMemberDetails);
                sendResponse(true);
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
                const who = this;
                //require(balance(who) >= ob.mfee, `You don't have enough credit on your account.`);

                //deposit into the treasury account
                transfer(ob.mfee).to(Insurer);

                return [membersCount, claimsCount];
            })
        ).api(CommunityMember.createClaim,
            (_) => { const _ = true; },
            (_) => 0,
            ((claimInfo, sendResponse) => {
                const who = this;
                sendResponse(true);
                Insurer.interact.saveNewClaim({ claimant: who, amountRequested: claimInfo.amountRequested });

                //TODO: read all the details of this member from the db

                //TODO: add the details to the map of current claim owners

                //TODO: get the package this member subscribed for

                //TODO: read the funding limit of this member's package
                const fundLimit = 600000;

                //claim amount can not exceed the limit
                const claimAmount = claimInfo.amountRequested >= fundLimit ? claimInfo.amountRequested : fundLimit;
                insuranceClaims[who] = { amountRequested: claimInfo.amountRequested, amountSet: claimAmount, accepted: false, approvalsCount: 0, sumOfSetAmounts: claimInfo.amountRequested };

                return [membersCount, claimsCount + 1];
            })
        ).api(CommunityMember.respondToClaim,
            (_) => { const _ = true; },
            (_) => 0,
            ((opinion, sendResponse) => {
                const who = this;
                const forWho = opinion.claimant;
                sendResponse(true);

                //get the claim of this claimant

                if (opinion.accepted) {
                    //openClaims[forWho].approvalsCount = openClaims[forWho].approvalsCount + 1;
                    //openClaims[forWho].sumOfSetAmounts += opinion.setAmount;
                    if (maybe(insuranceClaims[forWho], 0, readFromMap("approvalsCount")) >= 5) {
                        //TODO: determine the final amount agreed, and 
                        //TODO: transfer(agreedClaimAmount).to(opinion.claimant);
                        //TODO: eliminate the member from the list of claim owners (membersWithClaims)
                        //TODO: eliminate the claim from the list of open claims (openClaims)
                    }
                }
                //claimant.interact.seeResponse(who, opinion);
                return [membersCount, claimsCount];
            })
        ).api(CommunityMember.stopContract,
            () => { const _ = true; },
            () => 0,
            ((sendResponse) => {
                //this must be done by the deployer of the contract only.
                const who = this;
                //require(who == Insurer, `You are not allowed to take this action.`);
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








//follow example here:
// https://github.com/reach-sh/reach-lang/blob/master/examples/rsvp/index.rsh

//invariants info: https://en.wikipedia.org/wiki/Loop_invariant

//TODO: use IPFS: https://www.freecodecamp.org/news/technical-guide-to-ipfs-decentralized-storage-of-web3/


