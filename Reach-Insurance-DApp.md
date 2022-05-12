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
I feel this is the biggest issue, what is alarming is that this is in esence the core of the industry. I mean the whole industry in built on trust. I will take up an insurance policy because I don't trust that my business will survive a natural desaster or I don't trust other drivers on the road not to bumb my car. This is why I insure my car, business and and and. In taking up an insurance policy you gain trust, excusse me but "You should gain trust." Trust that whenever the time comes your policy will be paid out in full. 

This unfortunately is not always the case. We've heard countless stories of insurance companies failing to pay claims. This is because there is always a CENTRAL ENTITY that we hope and pray will play it's part. I will say this again, **That is not always the case.**

We need to understand one thing, which is the structure. You have a company that collects money each month from it's clients promissing that when a certain and very specific situation occures, a payout will be maid to the client. Ask yourself one question, "Who benefits whenever an claim if not paid?".

The answer is simple, it's the insurance company. It is for this reason that they try by all means possible, not to pay any claims. They will never go out of their way to meet you half way when ever you are in a deperate situation.

## Solution
So we understand that the route of this problem is that the industry is centralized.

With that assumption, the solution to our problem is exploiting the trust presented by blockchain. The idea is to build a decentralized application that is owned, managed and operated by the community.

Lol okay, I know that is still a bit vague, This just means that the terms and conditions of the insurance policies are coded into a smart contract. These terms and conditions are agreed upon by the members of the community. I mean by mere defintion this enforces trust and thus you can gaurantee that the policies will always hold and the claims will always be paid out. What is Important to note is that since it's the community that will be deciding wether or not a claim is paid, this means that there is a sense of humanity that is added. Whenever a community member is in distress,the neighbours and community members will sympothise with him or her and thus ensure that they are helped in whatever means possible.  

What I've explained above is very common in the African communities where members of the community contribute monthly fees and whenever one of the members of the community is in need of finacial help, the community will come together and decide on the amount that will be paid out to that member. 

Thanks to [Reach](https://reach.sh) we are able to do  just that. For those that don't know, [Reach](https://reach.sh) is a blockchain development platform that aids developers to build faster and cheaper decentralized applications. As a result there is more time to focus on busniess logic. This is great because you are now able to build applications that are richer, "I won't lie i was tempted to say REACHER 🤣" in value and fucntionality.

## Decentralized Application
It's a community owned insurance platform, where every member is both an insurer and a policy holder (client) at the same time. When a member faces any disaster such as loss/damage of property, loss of a relative, sickness, or any other situation that calls for emmergency help, they can submit a claim for funding through the decentralized application which is communally owned. All that is required for the member to be funded is approval of atleast 5 members of the same community, who then act as the witnesses of the reported incidence. Upon receiving the claim, the Dapp notifies every member of the community, prompting anyone of them to voluntarilly approve the claim in case they are aware of it and hence they can act as witnesses. If the Dapp receives atleast 5 approvals, then the requested amount of money will be taken off the treasury account and transfered to the account of the claimant. However, the amount that can be given to the claimant cannot exceed their funding limit. The funding limit depends on how much monthly contributions.

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

#### Registration
For a user to be registered, they need to have an Algorand account. Once they have one, they can scan the Qr code or enter a mnemonic.
![login](https://drive.google.com/file/d/1NF661kqPc2uc7dL-SjwFJGY44aSUCKsg/view?usp=sharing)

Once you've registered and logged in you get the dashboard page, where you will see the claim notification, claim status, monthly contributions, open claims and a list of claims.
![dashboard-no-claim](https://drive.google.com/file/d/1epjTEyi0EGkSykRont96i7iPrRmbdo6i/view?usp=sharing)

You can create a new claim, to do that you will have to enter a claim amount and a description of the claim.
![new-claim](https://drive.google.com/file/d/1ppFdY-eEw27gZzLSmMsqNAqwYsnn5z4c/view?usp=sharing)

Once you've created you claim, the dashboard will update and show the newly created claim.
![dashboard-with-new-claim](https://drive.google.com/file/d/1bNxmYyBFoYOB0L3utQ5byV9ATIZ3cahr/view?usp=sharing)

A community member will see your claim on their dashboard and will be able to interact with the claim. They can either accept or reject you claim. In accpecting the claim, they enter an amount that they feel is fit for the claim. An average of all the amount's is what will be paid out.
![responde-to-claim](https://drive.google.com/file/d/1GbhtNCg30RbBCNgVvg194UmIGrGCH8vt/view?usp=sharing)

The claim will then be updated in the Dashboard
![claim-updated](https://drive.google.com/file/d/11spIQhm3UsECqMzJ-svNgFarrYB9ha4i/view?usp=sharing)

It takes 5 members to approve a claim, so once a claim has been approved, funds will be released and the member that created the claim can withdraw the funds.
![withdraw-funds](https://drive.google.com/file/d/11spIQhm3UsECqMzJ-svNgFarrYB9ha4i/view?usp=sharing)

## Conclution
This is a very basic and simple example but what it does well is that it shows us the power of blockchain and the simplicity offered by [Reach](https://reach.sh) to create decentralized application. The big take away is that insurance shoudl be decentralized and this is possible with the use of blockchain.

### Improvement
This application can be inproved in a number of ways. The front end can connect to other systems and services such as emergency services, payment gateways and such.  We can also create API that will expose fuctions that run on the blockchain and we can use that to run automation. 