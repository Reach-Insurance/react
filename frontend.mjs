import { loadStdlib } from '@reach-sh/stdlib';
const stdlib = await loadStdlib();
import * as backend from './build/index.main.mjs';
//const startingBalance = stdlib.parseCurrency(100);

//REF: https://docs.reach.sh/frontend/#ref-frontends-js-acc
const insurerAccount = await stdlib.newAccountFromMnemonic("replace this with the twelve word secret phrase for the insurer account");
stdlib.fundFromFaucet(insurerAccount, 100); //works on public or private testnets

//==============================contract deployer===========================
const insuranceContract = insurerAccount.contract(backend);
await insuranceContract.participants.Insurer({
    
    getSale: () => {
        console.log(`Insurer sets parameters of sale:`, params);
        return params;
    },
    auctionReady: () => {
        startBidders();
    },
    seeBid: (who, amt) => {
        console.log(`Insurer saw that ${stdlib.formatAddress(who)} bid ${stdlib.formatCurrency(amt)}.`);
    },
    showOutcome: (winner, amt) => {
        console.log(`Insurer saw that ${stdlib.formatAddress(winner)} won with ${stdlib.formatCurrency(amt)}`);
    },
    
});

//============================participants=============================
const startBidders = async () => {
    let bid = minBid;
    const runBidder = async (who) => {
        const inc = stdlib.parseCurrency(Math.random() * 10);
        bid = bid.add(inc);

        //const acc = await stdlib.newTestAccount(startingBalance);
        const acc = await stdlib.newAccountFromMnemonic("member will replace this with their twelve word secret phrase");
        acc.setDebugLabel(who);
        await acc.tokenAccept(nftId);
        bidders.push([who, acc]);
        const contractHandle = acc.contract(backend, insuranceContract.getInfo());
        const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc));

        console.log(`${who} decides to bid ${stdlib.formatCurrency(bid)}.`);
        console.log(`${who} balance before is ${await getBal()}`);
        try {
            const [ lastBidder, lastBid ] = await contractHandle.apis.Bidder.bid(bid);
            console.log(`${who} out bid ${lastBidder} who bid ${stdlib.formatCurrency(lastBid)}.`);
        } catch (e) {
            console.log(`${who} failed to bid, because the auction is over`);
        }
        console.log(`${who} balance after is ${await getBal()}`);
    };

    await runBidder('Alice');
    await runBidder('Bob');
    await runBidder('Claire');
    while ( ! done ) {
        await stdlib.wait(1);
    }
};




