# Reach Insurance

## The Problem
All innovation starts with a problem, this again holds true. There are several issues faced in the Insurance Industry thoughout the world. The following are the common faced issues in this industry.

* Cyber Attcaks
* Keeping up with ever evolving technology
* Trust
* Market competition
* Poor management
* Economic instability
* Unskilled workers.

### Trust 
I feel this is the biggest issue, what is alarming is that this is in esence the core of the industry. I mean the whole industry in built on trust. I will take up an insurance policy because I don't trsut that my business will survice a natural desaster or I don't trust other drivers on the road thus I insure my car. In taking up an insurance policy you gain trust, excusse me but "You should gain trust." Trust that whenever the time comes your policy will be paid out in full. 

This unfortunately is not always the case. We've heard countless stories of Insurance companies failing to pay claims. This is because there is always a CENTRAL entity that we hope and pray will play it's part. I will this again, **That is not always the case.**

## Solution
The solution to our problem is exploiting the trust presented by blockchain. The Idea is to build a decentralized application where the terms and conditions of the insurance policies are coded into a smart contract. I mean by mere defintion that enforces trust and thus you can gaurantee that the policies will always hold and the claims will always be paid out if they meet the terms and conditions.

Thanks to [Reach](https://reach.sh) we are able to do  just that. For those that don't know, [Reach](https://reach.sh) is a blockchain development platform that aids developers to build fater and cheaper decentralized applications. As a result there is more time to focus on busniess logic. This is great because you are now able to build applications that are richer, "I won't lie i was tempted to say REACHER 🤣" in value and fucntionality.

## Decentralized Application
It's a community owned insurance platform, where every member is both an insurer and a policy holder (client) at the same time. When a member faces any disaster such as loss/damage of property, loss of a relative, sickness, or any other situation that calls for emmergency help, they can submit a claim for funding to the decentralized application which is communally owned. All that is required for the member to be funded is approval of atleast 5 members of the same community, who then act as the witnesses of the reported incidence. Upon receiving the claim, the Dapp notifies every member of the community, prompting anyone of them to voluntarilly approve the claim in case they are aware of it and hence they can act as witnesses. If the Dapp receives atleast 5 approvals, then the requested amount of money will be taken off the treasury account and transfered to the account of the claimant. However, the amount that can be given to the claimant cannot exceed their funding limit. The funding limit depends on how much monthly contributions.

### Source of funds
Every member pays a monthly subscription fee to the Dapp for the insurance security the same way they would do to a traditional insurance company. The more monthly fee a member pays, the higher their funding limit. 

### Entities
![entities](https://user-images.githubusercontent.com/47475700/158845877-bed7a73d-1f17-4195-87df-08ae03134e14.png)

#### Insurer
This is the smart contract that is reponsible mantaining the trust of the application. It's main fuctionanlity is collecting the montly contributions, paying out claims once the community approves a claim.

#### Community Member
This is a general member of the community that will be using the Dapp. To register a member needs to have an Algorand account. Their pneumonic will be requested apon registration. They are given an option to create a new one also. The member will have to make a monthy contribution to continue being a member. Once a payment is missed the member's account will be suspended. 

### Functionality

* Registration
* Submit a Claim
* Respond to a Claim
* Cancel Mmembership
* Pay montly premium

## The Code
Done talking, so let's look at some code. For simplicity I will look at each file and break it down then explain how it all ties together.

### Index.rsh

|Insurer Fuction Name|Description|
|------------|-----------|
|mandatoryEntryFee| Used to define the monthly pemium|
|communityGroupName| Returns the name of the insurance|
|createInvoices| Used to create an invoice|
|moveMaturedPayments| Once the funds have matured this function is called and the funds are moved|
|saveNewMemberDetails| Save the details of the new member|
|saveNewClaim| Called when creating a new claim|
|notifyMembersAboutNewClaim| Diistributes infomation about the claim over the blockchain so that members can approve or reject the claim|
|seeFeedback| Get the feedback on a claim. Feedback is created by the community|
|getMemberData| Get infomation about a member|
|notifyFundedMember| Notificy the member about the outcome of their claim|
|stopContract| This is used to stop the deployed contract which act's as the insurer|

|Member Fuction Name|Description|
|------------|-----------|
|registerMembership| Register a new member|
|chosenInsurancePackage| Returns the insurance package that is chosen bt the member|
|payMonthlyFee| Pay the monthly premium|
|createClaim| Create a claim for members to approve or reject|
|respondToClaim| Approve or reject a claim|
|saveNewClaim| Called when creating a new claim|
|stopContract| Called when there is a need to stop the insurer's smart contract|

We start of by stating the version of reach, initializing the application then creating our first constant which is the Isurer. This is a participant, we declare all its fucntion's. We also add the functions parameters and return types.

```js 
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
        getMemberData: Fun([], Object({
            insrPackageId: UInt, amountDue: UInt, matureBalance: UInt, fundLimit: UInt
        })),
        notifyFundedMember: Fun([Address], Null),
        stopContract: Fun([], Bool)
    });
```

We define the Community member, we also define it's fuctions with the respective parameters and return types.

```js
const CommunityMember = API('CommunityMember', {
        registerMembership: Fun([Object({ fullName: Bytes(60), phone: Bytes(20), email: Bytes(60), chosenInsurancePackage: UInt })], Bool),
        payMonthlyFee: Fun([Object({ who: Address, mfee: UInt })], Bool),
        createClaim: Fun([Object({ amountRequested: UInt, amountSet: UInt, accepted: Bool, approvalsCount: UInt, sumOfSetAmounts: UInt })], Bool),
        respondToClaim: Fun([Object({
            claimant: Address, accepted: Bool, setAmount: UInt
        })], Bool),
        //changePackage: Fun([Bytes(60)], Bool),
        stopContract: Fun([], Bool)
    });
    init();
```

In the following step we publish the Insurer, in so doing we also make the "mandatoryEntryFee" and the "contractIsRunning" public.

```js
    Insurer.only(() => {
        const mandatoryEntryFee = declassify(interact.mandatoryEntryFee);
        const contractIsRunning = declassify(interact.contractIsRunning);
        interact.seeFeedback();
    });
    Insurer.publish(mandatoryEntryFee, contractIsRunning);
    const invariantCondition = true;
    commit();
    Insurer.publish();
```

We define a some constants.
* **registeredMembers** This is a list of all the members, we are only going to store limited infomation in the blockchain, more data will be stored in the database.
* **insuranceClaims** This is a map for each claim that is created. we use a map to enable other community members to interact with the claim by approving or rejecting the claim.
* **claimOwners** This is a map of the community member that created the claim. 
```js
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
```

This is where we create the actual fuctions and how they work. But first we define a while loop with a condition that the contracts needs to be running. Remember the "contractIsRunning" variable we defined earlir, this needs to be true for the body of the while loop to run. In reach we create while loops a little different

These are variable that are returned from the loop
* **membersCount** 
* **claimsCount**
```js
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
```
This fuction is used to register a new member. Since this fuction is called by the "CommunityMember" participant, "who" will always refere to member because of " const who = this; ". We call the Insurarer fuction to same the member details, we then send the montly premium into the insurers account, this will the th first instalment. Finally we save the member details and increase the count of members.

```js
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
        )
```
This function pays the monthly premium into the Insurer's account.

```js
        .api(CommunityMember.payMonthlyFee,
            (_) => { const _ = true; },
            (ob) => ob.mfee,
            ((ob, sendResponse) => {
                sendResponse(true);
                //deposit into the treasury account
                transfer(ob.mfee).to(Insurer);
                return [membersCount, claimsCount];
            })
```

This function creates a new claim. We fist call the Insurers function to save a new claim. We get the member details. We set the "claimOwners" object and parse the details we got from the "memberDetails". We set the  "fundLimitt" and the "claimAmount" then finally set the "insuranceClaims".

```js
        .api(CommunityMember.createClaim,
            (_) => { const _ = true; },
            (_) => 0,
            ((claimInfo, sendResponse) => {
                const who = this;
                Insurer.interact.saveNewClaim({ amountRequested: claimInfo.amountRequested });

                //read all the details of this member from the db
                const memberDetails = Insurer.interact.getMemberData();

                //add the details to the map of current claim owners
                claimOwners[who] = {
                    insrPackageId: memberDetails.insrPackageId,
                    amountDue: memberDetails.amountDue,
                    matureBalance: memberDetails.matureBalance
                };

                const fundLimitt = memberDetails.fundLimit;

                const claimAmount = claimInfo.amountRequested >= fundLimitt ? claimInfo.amountRequested : fundLimitt;
                insuranceClaims[who] = { amountRequested: claimInfo.amountRequested, amountSet: claimAmount, accepted: false, approvalsCount: 0, sumOfSetAmounts: claimInfo.amountRequested };

                sendResponse(true);
                return [membersCount, claimsCount + 1];
            })
        )
```
We first check if the claim is accepted. If it is we define some constants. for the "agreedClaimAmount" we get the average amount the community set for the claim. We then accept the claim and set the new claim amount. If the total number of approvals are greater that 5 we will notify the funded member.
```js
        .api(CommunityMember.respondToClaim,
            (_) => { const _ = true; },
            (_) => 0,
            ((opinion, sendResponse) => {
                const who = this;
                const forWho = opinion.claimant;
                sendResponse(true);

                if (opinion.accepted) {
                    //openClaims[forWho].approvalsCount = openClaims[forWho].approvalsCount + 1; //wrong syntax
                    const approvalsCnt = maybe(insuranceClaims[forWho], 0, readFromMap("approvalsCount"));
                    const sumOfSetAmts = maybe(insuranceClaims[forWho], 0, readFromMap("sumOfSetAmounts"));
                    const amtRqsted = maybe(insuranceClaims[forWho], 0, readFromMap("amountRequested"));
                    const amtSet = maybe(insuranceClaims[forWho], 0, readFromMap("amountSet"));
                    const agreedClaimAmount = (approvalsCnt < 5) ? amtSet : sumOfSetAmts / approvalsCnt;
                    insuranceClaims[forWho] = {
                        approvalsCount: approvalsCnt + 1,
                        sumOfSetAmounts: sumOfSetAmts + opinion.setAmount,
                        amountRequested: amtRqsted,
                        amountSet: agreedClaimAmount,
                        accepted: true,
                    };

                    if (approvalsCnt >= 5) {
                        transfer(agreedClaimAmount).to(forWho);

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
        )
```
To stop the contract you need to be the insurer and that is the first check that we make. If indeed the call come from the insurer we then stop the contract.
```js
        .api(CommunityMember.stopContract,
            () => { const _ = true; },
            () => 0,
            ((sendResponse) => {
                //this must be done by the deployer of the contract only.
                const who = this;
                require(who == Insurer, "You are not allowed to take this action.");
                const ok = Insurer.interact.stopContract();
                if (ok) {
                    sendResponse(true);
                    //FUTURE IMPROVEMENT: ensure that the deployer/Insurer does not have authority over the platform.
                    //ensure that he first get permission from members to stop the contract.
                    //ensure there are clearly agreed rules for non participation on this matter.
                } else {
                    sendResponse(false);
                }

                return [membersCount, claimsCount];
            })
        );
```
Lastly we transfer the Balance into the insurer's account. These are the funds that were collect from the members.
```js
    //cleanup: send all pending funds to the insurer (if any)
    transfer(balance()).to(Insurer);

    //terminate the concensus step
    commit();

    exit();
});
```

### Index.mjs
You can think of thhis as the interface between the blockchain and that front end. 

We first need to import the reach library and build file.
```js
import { loadStdlib } from '@reach-sh/stdlib';
const stdlib = await loadStdlib();
import * as backend from './build/index.main.mjs';
//const startingBalance = stdlib.parseCurrency(100);
```
We define the Insurers account and get funds from a Faucet, you need some funds so that you are able to deploy the contract.
```js
//REF: https://docs.reach.sh/frontend/#ref-frontends-js-acc
const insurerAccount = await stdlib.newAccountFromMnemonic("replace this with the twelve word secret phrase for the insurer account");
stdlib.fundFromFaucet(insurerAccount, 100); //works on public or private testnets
```
We define the functions that the Insurer can call.
```js
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
```

```js
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
```

## Conclution
This is a very basic and simple example but what it does well is that it shows us the power of blockchain and the simplicity offered by [Reach](https://reach.sh) to create decentralized application. The big take away is that insurance shoudl be decentralized and this is possible with the use of blockchain.

### Improvement
This application can be inproved in a number of ways. The front end can connect to other systems and services such as emergency services, payment gateways and such.  We can also create API that will expose fuctions that run on the blockchain and we can use that to run automation. 