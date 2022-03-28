'reach 0.1';

export const main = Reach.App(() => {
    const Insurer = Participant('Insurer', {
        communityGroupName: Bytes,
        createDatabase: Fun([], Null),
        approveNewMembership: Fun([Address], Null),
        createAddressForNewUSer: Fun([], Address),
        createInvoices: Fun([], Null),
        moveMaturedPayments: Fun([], Null),
    });
    const CommunityMember = ParticipantClass('CommunityMember', {
        registerMembership: Fun([{ name: Bytes, email: Bytes }], Bool),
        registerDependant: Fun([Address], Bool),
        cancelMembership: Fun([Address], Bool),
        payEntryFee: Fun([Address, UInt], Bool),
        payMonthlyFee: Fun([Address, UInt], Bool),
        changePackage: Fun([Bytes], Bool),
        getAccountStatement: Fun([Address], Map),
        createClaim: Fun([Address, UInt], Bool),
        respondToClaim: Fun([Address, Bool], Null),
        inheritAccount: Fun([], Null),
        approveInheritance: Fun([], Null),
        approveExit: Fun([], Null),
    });
    const Dependant = ParticipantClass('Dependant', {
        getAccountStatement: Fun([], Null),
        payMonthlyFee: Fun([], Null),
        createClaim: Fun([], Null),
        inheritAccount: Fun([], Null),
        approveInheritance: Fun([], Null),
    });
    const ImSvcProvider = ParticipantClass('ImSvcProvider', {
        registerMembership: Fun([], Null),
        cancelMembership: Fun([], Null),
        payEntryFee: Fun([], Null),
        createClaim: Fun([], Null),
        respondToClaim: Fun([], Null),
    });
    init();

    Insurer.only(() => {
        const { nftId, minBid, lenInBlocks } = declassify(interact.getSale());
    });
    Insurer.publish(nftId, minBid, lenInBlocks);
    const amt = 1;
    commit();

    Insurer.pay([[amt, nftId]]);
    Insurer.interact.auctionReady();

    assert(balance(nftId) == amt, "balance of NFT is wrong");
    const end = lastConsensusTime() + lenInBlocks;


    fork().case(CommunityMember, (() => ({

        msg: 19,
        when: declassify(interact.keepGoing())
    })),
        ((v) => v),
        (v) => {
            require(v == 19);
            transfer(wager + 19).to(this);
            commit();
            exit();
        }

    ).case(Dependant, (() => ({

        when: declassify(interact.keepGoing()),
        _local: interact.secretVal
    })),
        ((_) => wager),
        (_, _secV) => {
            commit();
            Bob.only(() => interact.showSecret(_secV))
            Alice.only(() => interact.showOpponent(Bob));
            race(Alice, Bob).publish();
            transfer(2 * wager).to(this);
            commit();
            exit();
        }

    ).case(ImSvcProvider, (() => ({

        when: declassify(interact.keepGoing()),
        _local: interact.secretVal
    })),
        ((_) => wager),
        (_, _secV) => {
            commit();
            Bob.only(() => interact.showSecret(_secV))
            Alice.only(() => interact.showOpponent(Bob));
            race(Alice, Bob).publish();
            transfer(2 * wager).to(this);
            commit();
            exit();
        }

    ).timeout(deadline, () => {

        race(...CommunityMember).publish();
        race(...Dependant).publish();
        race(...ImSvcProvider).publish();

        commit();
        exit();

    });

    commit();
    exit();
});



