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
        stopContract: Fun([], Null),
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
        interact.seeFeedback();
    });
    Insurer.publish(mandatoryEntryFee);
    const invariantCondition = true;
    //commit();

    const [
        returned1
    ] = parallelReduce([true])
        .invariant(invariantCondition)
        .while(Insurer.interact.contractIsRunning)
        .api(CommunityMember.registerMembership,
            ((newMemberDetails, sendResponse) => {
                //the registering member must have enough credit on their account to pay the entry fee.
                const who = this;
                require(balance(who) >= mandatoryEntryFee, `Entry fee cannot be less than ${mandatoryEntryFee}`);

                Insurer.interact.saveNewMemberDetails(newMemberDetails);

                sendResponse(true);
                who.pay(mandatoryEntryFee)
                transfer(mandatoryEntryFee).to(Insurer);
                return [true];
            })
        ).api(CommunityMember.payMonthlyFee,
            ((mfee, sendResponse) => {
                //the member must have enough credit on their account to pay the monthly fee.
                const who = this;
                require(balance(who) >= mfee, `You don't have enough credit on your account.`);
                who.pay(mfee);
                sendResponse(true);

                transfer(mfee).to(Insurer);
                return [true];
            })
        ).api(CommunityMember.createClaim,
            ((claimInfo, sendResponse) => {
                const who = this;
                sendResponse(true);
                claimInfo.claimant = who;
                Insurer.interact.saveNewClaim(claimInfo);
                return [true];
            })
        ).api(CommunityMember.respondToClaim,
            ((opinion, sendResponse) => {
                const who = this;
                sendResponse(true);

                //TODO: if this claimant has raised 5 approvals, then
                //TODO: determine the final amount agreed, and 
                //transfer(agreedClaimAmount).to(opinion.claimant);
                claimant.interact.seeResponse(who, opinion);
                return [true];
            })
        );
    commit();

    exit();
});

//invariants info: https://en.wikipedia.org/wiki/Loop_invariant

//TODO: use IPFS: https://www.freecodecamp.org/news/technical-guide-to-ipfs-decentralized-storage-of-web3/


