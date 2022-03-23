# Insurance Dapp
This is an Insurance Decentralized Application (Dapp) developed in reach. 

## Idea
It's a community owned insurance platform, where every member is both an insurer and a policy holder (client) at the same time. When a member faces any disaster such as loss/damage of property, loss of a relative, sickness, or any other situation that calls for emmergency help, they can submit a claim for funding to the decentralized application which is communally owned. All that is required for the member to be funded is approval of atleast 5 members of the same community, who then act as the witnesses of the reported incidence. Upon receiving the claim, the Dapp notifies every member of the community, prompting anyone of them to voluntarilly approve the claim in case they are aware of it and hence they can act as witnesses. If the Dapp receives atleast 5 approvals, then the requested amount of money will be taken off the treasury account and transfered to the account of the claimant. However, the amount that can be given to the claimant cannot exceed their funding limit. The funding limit depends on how much monthly fee the member pays.

## Source of funds
Every member pays a monthly subscription fee to the Dapp for the insurance security the same way they would do to a traditional insurance company. They can also pay for their dependants such as children. The more monthly fee a member pays, the higher their funding limit. 

## Entities
![entities](https://user-images.githubusercontent.com/47475700/158845877-bed7a73d-1f17-4195-87df-08ae03134e14.png)

## Participants

### Community Member
This is a general member of the community that will be using the Dapp. Upon registration an account will be created for the member. The member will have to make a monthy contribution to continue being a member. Once a payment is missed the member's account will be suspended. 

### Functionality

#### Registration
* Register New Members
  * Complete a form
* Email account should be verified
* Contact Details should be varified
* Blockchain account should be created
* The first contribution should be collected

#### Submit a Claim
A member creates a claim. They do this by filling in a form:
* Description of the claim
* Documents to support the claim
#### Respond to a Claim
* Approve a Claim
* Reject a Claim
* Cannot be the member that created the claim

#### Cancel Mmembership
A member can request the cancel their membership. Once they do this, their account will be freezed and achieved.

### Claim
Claim Should Coexist

### Data Models

#### Member Data - Frontend
|Field|Data Type|Description|
|-----|---------|-----------|
|Account|Hash|Public Key of members blockchain account|
|Names|String|Full names of the member|
|Email|String|Email address of the member|
|Address|String|Physical Address of the member|
|Contacts|String|Contact number of the member|
|AccountActive|Bool|Used to depermine whether or not the account is active|

#### Member Data - Blockchain
|Field|Data Type|Description|
|-----|---------|-----------|
|Montly contributions|Int|The number of contributions made by the member|
|Balance|Currency|Balance of the member's account|
|Claims|Object|The claims that the member has created|

#### Claim Data
|Field|Data Type|Description|
|-----|---------|-----------|
|OwnerAddress|Hash|The address of the person that created the claim|
|ClaimId|Guid|The Id used to identify the claim|
|Description|String|A detailed description of the claim|
|Amount|Currency|The amount that is due if the claim is accepted|
|Accepted|Bool|True is the claim is accepted, default is false|
|Documents|Url|A link to the supporting documents of the claim, IPFS|
|Approvals|Array[Approval]|A list of the approvals|

#### Approval
|Field|Data Type|Description|
|-----|---------|-----------|
|Approver|Hash|The address of the member that approved or rejected the claim|
|Response|Bool|True or False, for Approve or Reject|

### Accounts

#### Treasury Account
This is the main account into which all funds are collected. The funds in this account will be used to fund the claims. 

This can be an abstract accout. Abstract in the sense that it's a sum of all the accounts. It will be defined in the smart contract the the funds in each accout can only be sent to pay a claim or if that respective account has a claim that has been approaved and needs to withdraw the funds received for the claim.

#### User Account
This account is created for each member. Funds that are paid into this account cannot be sent or withdrawn.

Funds can only be sent when:
* There is payout for a claim.
* Funds are used to pay another members claim.

### Packages
Allow members to pay what they are comfortable with paying

### Delay intrest rate
What is the intrest that a member needs to pay if they miss a payment. When you miss a payment your account is not active till you pay a certain fee with intrest, that needs to be calculated.
