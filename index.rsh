'reach 0.1';

export const main = Reach.App(() => {
    const Insurer = Participant('Insurer', {
        mandatoryEntryFee: UInt,
        communityGroupName: Bytes(60),
        contractIsRunning: Bool,

        createDatabase: Fun([], Null),
        approveNewMembership: Fun([Address], Null),
        createAddressForNewUSer: Fun([], Address),
        createInvoices: Fun([], Null),
        moveMaturedPayments: Fun([], Null),
        saveNewMemberDetails: Fun([Object({
            fullName: Bytes(60), phone: Bytes(20), email: Bytes(60), chosenInsurancePackage: Bytes(60)
        })], Null),
        saveNewClaim: Fun([Object({
            ownerAddr: Address,
            amountRequested: UInt,
            description: Bytes(600),
            supportDocuments: Bytes(100)
            //amountSet = amountRequested ,
            //accepted: Bool = false,
            //approvalsCount = 0,
        })], Null),
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
        registerDependant: Fun([Address], Bool),
        cancelMembership: Fun([Address], Bool),
        payEntryFee: Fun([Address, UInt], Bool),
        payMonthlyFee: Fun([Address, UInt], Bool),
        changePackage: Fun([Bytes(60)], Bool),
        createClaim: Fun([Address, UInt], Bool),
        stopContract: Fun([], Null),
        respondToClaim: Fun([Object({
            claimant: Address, accepted: Bool, setAmount: UInt
        })], Bool),
        inheritAccount: Fun([], Null),
        approveInheritance: Fun([], Null),
        approveExit: Fun([], Null),
        seeResponse: Fun([Address, Object({
            claimant: Address, accepted: Bool, setAmount: UInt
        })], Null)
    });
    const Dependant = API('Dependant', {
        getAccountStatement: Fun([], Null),
        payMonthlyFee: Fun([], Null),
        createClaim: Fun([], Null),
        inheritAccount: Fun([], Null),
        approveInheritance: Fun([], Null)
    });
    const ImSvcProvider = API('ImSvcProvider', {
        registerMembership: Fun([], Null),
        cancelMembership: Fun([], Null),
        payEntryFee: Fun([], Null),
        createClaim: Fun([], Null),
        respondToClaim: Fun([], Null),
        seeFeedback: Fun([], Null)
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
        fullName: Bytes(60),
        physicalAddress: Bytes(100),
        insrPackageId: UInt,
        dateJoined: Bytes(30),
        amountDue: UInt,
        matureBalance: UInt
    }));

    //a constant list of insurance packages, in a map.
    const insurancePackages = new Map(UInt, Object({ monthlyFee: UInt, fundingLimit: UInt }));
    insurancePackages[1] = { monthlyFee: 1000, fundingLimit: 120000 };
    insurancePackages[2] = { monthlyFee: 5000, fundingLimit: 600000 };
    insurancePackages[3] = { monthlyFee: 10000, fundingLimit: 1200000 };
    insurancePackages[4] = { monthlyFee: 50000, fundingLimit: 6000000 };
    insurancePackages[5] = { monthlyFee: 100000, fundingLimit: 12000000 };
    insurancePackages[6] = { monthlyFee: 500000, fundingLimit: 60000000 };

    const [
        openClaims,
        membersWithClaims,
        membersCount,
        claimsCount
    ] = parallelReduce([insuranceClaims, claimOwners, 0, 0])
        .define(() => {
            const getApprovalsCountFromMap = (someObject) => { return someObject.approvalsCount; };

            //this function can be passed to mayBe(...) function to 
            //get the value from a mayBe which is returned by a Map of objects
            //Ex.   maybe(myMapOfObjects[forWho], 0, readFromMap(objectKey) )
            //will return the value of the specified object key if the map contains 
            // an object at its "forWho" key
            const readFromMap = (key) => { return (objectInMapInstance) => { return objectInMapInstance[key]; }; };
        })
        .invariant(invariantCondition)
        .while(contractIsRunning)
        .api(CommunityMember.registerMembership,
            (_) => { const _ = true; },
            (_) => 0,
            ((newMemberDetails, sendResponse) => {
                //the registering member must have enough credit on their account to pay the entry fee.
                const who = this;
                require(balance(who) >= mandatoryEntryFee, `Entry fee cannot be less than ${mandatoryEntryFee}`);

                Insurer.interact.saveNewMemberDetails(newMemberDetails);

                sendResponse(true);
                who.pay(mandatoryEntryFee)
                transfer(mandatoryEntryFee).to(Insurer);

                //add member's address to the list of addresses
                registeredMembers.insert(who);

                return [openClaims, membersWithClaims, membersCount + 1, claimsCount];
            })
        ).api(CommunityMember.payMonthlyFee,
            (_) => { const _ = true; },
            (mfee) => mfee,
            ((mfee, sendResponse) => {
                //the member must have enough credit on their account to pay the monthly fee.
                const who = this;
                require(balance(who) >= mfee, `You don't have enough credit on your account.`);
                who.pay(mfee);
                sendResponse(true);

                transfer(mfee).to(Insurer);
                return [openClaims, membersWithClaims, membersCount, claimsCount];
            })
        ).api(CommunityMember.createClaim,
            (_) => { const _ = true; },
            (_) => 0,
            ((claimInfo, sendResponse) => {
                const who = this;
                sendResponse(true);
                claimInfo.claimant = who;
                Insurer.interact.saveNewClaim(claimInfo);

                //TODO: read all the details of this member fro the db

                //TODO: add the details to the map of current claim owners

                //TODO: get the package this member subscribe for


                //TODO: read the funding limit of this member's package
                const fundLimit = 600000;

                //claim amount can not exceed the limit
                const claimAmount = claimInfo.amountRequested >= fundLimit ? claimInfo.amountRequested : fundLimit;
                openClaims[who] = { amountRequested: claimInfo.amountRequested, amountSet: claimAmount, accepted: false, approvalsCount: 0 };

                return [openClaims, membersWithClaims, membersCount, claimsCount + 1];
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
                    openClaims[forWho].approvalsCount = openClaims[forWho].approvalsCount + 1;
                    openClaims[forWho].sumOfSetAmounts += opinion.setAmount;
                    if (maybe(openClaims[forWho], 0, readFromMap("approvalsCount")) >= 5) {
                        //TODO: determine the final amount agreed, and 
                        //TODO: transfer(agreedClaimAmount).to(opinion.claimant);
                        //TODO: eliminate the member from the list of claim owners (membersWithClaims)
                        //TODO: eliminate the claim from the list of open claims (openClaims)
                    }
                }
                //claimant.interact.seeResponse(who, opinion);
                return [openClaims, membersWithClaims, membersCount, claimsCount];
            })
        ).api(CommunityMember.stopContract,
            () => { const _ = true; },
            () => 0,
            ((sendResponse) => {
                //this must be done by the deployer of the contract only.
                const who = this;
                require(who == Insurer, `You are not allowed to take this action.`);
                sendResponse(true);
                //FUTURE IMPROVEMENT: ensure that the deployer/Insurer does not have authority over the platform.
                //ensure that he first get permission from members to stop the contract.
                //ensure there are clearly agreed rules for non participation on this matter.

                return [openClaims, membersWithClaims, membersCount, claimsCount];
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


