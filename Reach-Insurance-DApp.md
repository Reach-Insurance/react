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

We start of by stating the version of reach, initializing the application then creating our first constant which is the Isurer. This is a participant, we declare all its fucntion's. We also add the functions parameters and return types.

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

Now we define that Community member, we also define it's fuctions with the respective parameters and return types.
