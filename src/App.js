import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import loadingGif1 from './images/ajax-loader.gif';
import errorIcon from './images/error.png';
import * as backend from './reach-build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import { createClient } from "@supabase/supabase-js";
import useConfirm from "./hooks/useConfirm";
import Dashboard from './dashbord';
import SignupForm from './components/signup-form';

//const reach = loadStdlib(process.env);
//const reach = loadStdlib("ALGO");
const reach = loadStdlib({
  REACH_CONNECTOR_MODE: "ALGO-browser",
  PUBLIC_URL: "https%3A%2F%2Fr.bridge.walletconnect.org"
});

//reach.unsafeAllowMultipleStdlibs();
const SUPABASE_URL = "https://byolfysahovehogqdena.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5b2xmeXNhaG92ZWhvZ3FkZW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg3NTcwMTYsImV4cCI6MTk2NDMzMzAxNn0.Q5h8nwP-qy1o5oDa0UCAgj1m7vTXOlhPyoZRC-0CNnk";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

//REF: https://docs.reach.sh/frontend/#js_setProviderByName
//reach.setProviderByName('TestNet');
//reach.setWalletFallback(reach.walletFallback({}));
//...
//WalletConnect: enables the Dapp to connect to any wallet
//REF: https://docs.reach.sh/tut/rps/#p_421
//reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', WalletConnect }));

//console.log("connectorFunctions.getConnectorMode()=", reach.getConnectorMode());

function App() {
  const { confirm } = useConfirm();

  const [communityGroupName, setCommunityGroupName] = useState("Test group insurance");
  const [mandatoryEntryFee, setMandatoryEntryFee] = useState(0);
  const insurerContract = useRef(null);
  const currentUser = useRef({ fullName: "Guest" });
  const contractInfo = useState({});
  const algoAccount = useRef({ networkAccount: { addr: "" } });
  const mnemonicRef = useRef(<></>);
  const [mnemonicStr, setMnemonicStr] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [activePage, setActivePage] = useState("LOGIN");
  const [deployed, setDeployed] = useState(false);
  const [isSavingContractInfo, setIsSavingContractInfo] = useState(false);
  const [contractInfoSaved, setContractInfoSaved] = useState(false);
  const [errMessage, setErrMessage] = useState("Err occured.");
  const [errCode, setErrCode] = useState("GOTO_LOGIN");
  const [deployerModeOn, setDeployerModeOn] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);
  const interact = useRef({
    communityGroupName: communityGroupName,
    mandatoryEntryFee: Number(mandatoryEntryFee),
    contractIsRunning: true,
    saveNewMemberDetails: async ({ fullName, phone, email, chosenInsurancePackage }) => {
      const { data, error } = await supabaseClient.from("members").insert([{
        fullName, phone, email, chosenInsurancePackage, memberAddr: algoAccount.current.networkAccount.addr
      }]);
      if (error) {
        console.log(`Error while saving member details ${error}`);
      } else {
        console.log(`Member registered successfully: ${JSON.stringify(data)}`);
      }
    },
    seeFeedback: () => {
      console.log("insurer saw feedback on deploying the contract");
    },
    saveNewClaim: async ({ amountRequested }) => {
      const deadline = new Date();
      deadline.setDate(deadline.getDate() + 10); //new claim will expire if it fails to raise 5 approvals in 10 days.

      const amountSet = amountRequested;
      const sumOfSetAmounts = 0;
      const approvalscount = 0;
      const { data: newClaimData, error } = await supabaseClient.from("claims").insert([{
        claimant: algoAccount.current.networkAccount.addr,
        amountRequested, amountSet, sumOfSetAmounts, approvalscount,
        description, deadline
      }]);
      if (error) {
        console.log(`Error while saving new claim details `, error);
      } else {
        if (newClaimData.length > 0) {
          const claimId = newClaimData[0].id;
          const { data: members } = await supabaseClient.from("members").select("memberAddr");
          members.forEach(async ({ memberAddr: notified }) => {
            // link the new claim with all members in the joining "claimnotifications" table.
            const { error } = await supabaseClient.from("claimnotifications").insert([{ claimId: claimId, member: notified, claimant: addr }]);
            if (error) { console.log(error); }
          });
        }
        console.log(`New claim recorded successfully: ${JSON.stringify(newClaimData)}`);
      }
    },
    notifyMembersAboutNewClaim: ({ ownerAddr, amountRequested, description, supportDocuments }) => {
      //TODO: access emails of all members and send an email notification to each member
      console.log("Email notifications sent to all members", ownerAddr, amountRequested, description, supportDocuments);
    },
    createInvoices: () => {
      console.log("creating invoices at the end of the month ...");
    },
    moveMaturedPayments: () => {
      console.log("moving matured payments from temporary queue ...");
    },
    getMemberData: async () => {
      const memberAddress = algoAccount.current.networkAccount.addr;
      const { data: memberDataArr, error } = await supabaseClient.from("members").select("*").eq('memberAddr', memberAddress);
      if (error) {
        console.log("interact.getMemberDetails errored: ", error.message);
      }
      if (memberDataArr.length > 0) {
        const { matureBalance, fundLimit, chosenInsurancePackage, amountDue } = memberDataArr[0];
        return {
          insrPackageId: chosenInsurancePackage,
          amountDue,
          matureBalance,
          fundLimit
        };
      } else {
        return {
          insrPackageId: 1,
          amountDue: 0,
          matureBalance: 0,
          fundLimit: 0
        };
      }
    },
    stopContract: async () => {
      interact.current.contractIsRunning = false;
      await insurerContract.current.p.Insurer(interact.current);
      //delete info record from supabase
      const { error: err } = await supabaseClient.from("smartcontracts").delete().match({ name: "insurancedapp" });
      if (err) { console.log("err: ", err); }
    },
    notifyFundedMember: async (address) => {
      //TODO: update the member's claim status to "funded"
      console.log("Your claim has been funded. Member address = ", address);
    },
    log: console.log             //REF: https://docs.reach.sh/guide/logging/
  });

  //===============================================================
  useEffect(() => {
    setConnecting(true);
    async function readFromDb() {
      try {
        //fetch the contract info
        const { data: infoArr, error } = await supabaseClient.from("smartcontracts").select("info").eq('name', "insurancedapp");
        if (error) { setConnecting(false); throw error; }
        //if info was found, 
        if (infoArr.length > 0) {
          setDeployed(true);
          contractInfo.current = infoArr[0].info;
          console.log("contract info found: ", infoArr[0].info);
        }
        setConnecting(false);
      } catch (er) {
        console.log("Oops! Failed to fetch the contract info/address", er);
      }
    }

    readFromDb();
  }, []);

  //===============================================================
  function LoginWithMnemonic(e) {
    ConnectWallet(e, true);
  }
  function ConnectWallet(e, loginWithMnemonic = false) {
    e.preventDefault();
    if (connecting) {
      alert("Pease wait (Page is still loading)");
    } else {
      try {
        console.log("Login(){...}");
        reach.setWalletFallback(reach.walletFallback({
          providerEnv: {
            ALGO_TOKEN: '',
            ALGO_SERVER: "https://testnet-api.algonode.cloud",
            ALGO_PORT: '',
            ALGO_INDEXER_TOKEN: '',
            ALGO_INDEXER_SERVER: "https://testnet-idx.algonode.cloud",
            ALGO_INDEXER_PORT: '',
          },
          WalletConnect
        }));

        //reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', WalletConnect }));

        let getPromise = null;
        if (loginWithMnemonic) {
          getPromise = reach.newAccountFromMnemonic(mnemonicStr);
        } else {
          getPromise = reach.getDefaultAccount();
        }

        getPromise.then((acc) => {
          setLoginErr("");
          algoAccount.current = acc;
          console.log("algoAccount.current = ", algoAccount.current);
          if (!deployed) {
            //https://devrecipes.net/custom-confirm-dialog-with-react-hooks-and-the-context-api/
            console.log("Awaiting want to deploy prompt");
            confirm('The insurer contract is not yet deployed. Do you want to deploy it ?.')
              .then(wantToDeployContract => {
                if (wantToDeployContract) {
                  setActivePage("DEPLOYER");
                } else {
                  setErrMessage("Wait for the insurer to deploy the contract, or contact them for help");
                  setErrCode("GOTO_LOGIN");
                  setActivePage("ERROR");
                }
              });
          } else if (deployerModeOn) {
            setActivePage("DEPLOYER");
          } else {
            async function accessDb() {
              let isRegisteredMember = false;
              const memberAddr = algoAccount.current.networkAccount.addr;
              const { data: memberDataArr, error } = await supabaseClient.from("members").select("*").eq('memberAddr', memberAddr);
              if (error) {
                setErrMessage(JSON.stringify(error));
                setErrCode("GOTO_LOGIN");
                setActivePage("ERROR");
              }
              if (memberDataArr.length > 0) {
                isRegisteredMember = true;
                currentUser.current = memberDataArr[0];
              }
              if (isRegisteredMember) {
                //create a contract handle and assign it to insurerContract
                insurerContract.current = algoAccount.current.contract(backend, contractInfo.current);
                setActivePage("DASHBOARD");
              } else {
                setActivePage("SIGNUP");
              }
            }
            accessDb();
          }
        }).catch((er) => {
          console.log("Eer: ", er.message);
          setLoginErr(er.message);
        });

      } catch (er) {
        console.log("errr: ", er);
      }
    }
  }

  //===============================================================
  const deployContract = async (e) => {
    console.log("deployContract(){...}");
    e.preventDefault();
    setIsSavingContractInfo(true);

    const insurerAccount = algoAccount.current;
    //deploy the contract
    console.log("Deploying... insurerAccount=", insurerAccount);
    const ctc = insurerAccount.contract(backend);
    insurerContract.current = ctc;
    console.log("insurerContract.current=", insurerContract.current);
    //---------
    // Set deployed contract Init state
    console.log("Setting the initial state of the contract just deployed");
    await insurerContract.current.p.Insurer(interact.current);
    //---------

    console.log("getting the contract info ...");
    const info = await insurerContract.current.getInfo();
    console.log("info =", info);
    const infoStr = JSON.stringify(info);
    //const infoStr = "RNE5XUWGHA56LKQFAS7KWQPZAGOR5U6ZCARU4SOZ4XQRVPWO6WCYLUD4HE";
    console.log("infoStr = ", infoStr);

    //save the contract info into supabase
    console.log("saving the contract info into supabase ...");
    const { data, error: err } = await supabaseClient.from("smartcontracts").insert([{
      name: "insurancedapp", info: infoStr
    }]);
    setIsSavingContractInfo(false);
    if (err) {
      console.log(`Error while saving the contract info to supabase ${err}`);
    } else {
      console.log(`Saved contract info to supabase: ${JSON.stringify(data)}`);
    }

    console.log("... Done.");
    console.log("insurerContract.current=", insurerContract.current);
  };

  //===============================================================
  const stopContract = async () => {
    console.log("stopContract() invoked");
    const insurerAccount = algoAccount.current;
    const insurerContractHandle = insurerAccount.contract(backend, contractInfo.current);
    const ok = await insurerContractHandle.apis.CommunityMember.stopContract();
    setContractInfoSaved(!ok);
  };

  function refreshDashbord() {
    setRefreshCount(refreshCount + 1);
  }

  //===============================================================
  return (
    <>
      {(activePage === "LOGIN") ?
        <div className='h-screen flex bg-blue-100'>
          <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-2 px-16 shadow'>
            <h1 className='text-4xl text-blue-700  text-primary mt-2 mb-2 text-center'> Insurance Dapp
              <span>
                <button onClick={setDeployerModeOn.bind(this, (!deployerModeOn))} className="pl-4 text-bold">
                  [{deployerModeOn && "d"}]
                </button>
              </span>
            </h1>
            <hr />

            {(loginErr !== "") && <> <span className="text-red-400">{loginErr}</span> <span><img src={errorIcon} width="30px" alt="" /></span> <hr /> </>}
            <br />
            <button onClick={ConnectWallet}
              className={`w-full bg-green-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-greenn-dark`}
            >
              {connecting && <span> <img src={loadingGif1} width="12px" alt='' /> </span>}
              <span>{connecting ? "Please wait ..." : "Connect algo wallet"}</span>
            </button>
            <hr />
            <br />
            OR
            <h3 className='text-l font-medium text-primary mt-6 mb-6 text-center'>
              Enter Your mnemonic to Login
            </h3>

            <form >
              <div>
                <input ref={mnemonicRef}
                  type="password"
                  value={mnemonicStr}
                  onChange={e => setMnemonicStr(e.target.value)}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id='mnemonic'
                  placeholder='12-word phrase'
                />
              </div>

              <div>
                <label>Have no Algorand account ? <a target="_blank" href="https://perawallet.app/" className='text-blue-600' rel="noreferrer">Create a new</a> </label>
              </div>

              <div className='flex justify-center items-center mt-6'>
                <button onClick={LoginWithMnemonic}
                  className={` bg-blue-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-greenn-dark`}
                >
                  {connecting && <span> <img src={loadingGif1} width="12px" alt='' /> </span>}
                  <span>{connecting ? "Wait ..." : "Login"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        : (activePage === "SIGNUP") ?

          <SignupForm
            algoAccount={algoAccount}
            setActivePage={setActivePage}
            backend={backend}
            contractInfo={contractInfo}
          />

          : (activePage === "DASHBOARD") ?

            <Dashboard
              insurerContract={insurerContract.current}
              addr={algoAccount.current.networkAccount.addr}
              algoAccount={algoAccount}
              backend={backend}
              contractInfo={contractInfo}
              currentUser={currentUser.current}
              refreshDashbord={refreshDashbord}
            />

            : (activePage === "DEPLOYER") ?
              <div className='h-screen flex bg-blue-100'>
                <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-2 px-16 shadow'>
                  <h1 className='text-4xl text-blue-700  text-primary mt-2 mb-2 text-center'> Insurance Dapp </h1>
                  <hr />

                  <h1 className='text-xl font-medium text-primary mt-6 mb-6 text-center'>
                    Deploy the contract
                  </h1>

                  <form >
                    <div>
                      <label htmlFor='fullname'> Insurer name </label>
                      <input
                        type="text"
                        value={communityGroupName}
                        onChange={e => setCommunityGroupName(e.target.value)}
                        className={`w-full py px-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                      />
                    </div>

                    <div>
                      <label htmlFor='phone'> Mandatory entry fee </label>
                      <input
                        type="number"
                        value={mandatoryEntryFee}
                        onChange={e => setMandatoryEntryFee(e.target.value)}
                        className={`w-full py px-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                      />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                      <button onClick={deployContract}
                        className={`bg-blue-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-greenn-dark ${(isSavingContractInfo || contractInfoSaved) ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {contractInfoSaved ? "Deployed" : isSavingContractInfo ? "Deploying ..." : "Deploy contract now"}
                      </button>
                      {
                        isSavingContractInfo && <span>
                          <img src={loadingGif1} width="40px" alt='' />
                        </span>
                      }
                      {contractInfoSaved &&
                        <button onClick={stopContract}
                          className={`bg-blue-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-greenn-dark`}
                        > Stop contract </button>
                      }
                    </div>
                  </form>
                </div>
              </div >

              : (activePage === "ERROR") ?

                <div>
                  <h1> Error ! </h1>
                  <p> {errMessage} </p>
                  <br />
                  <hr />
                  {
                    errCode === "GOTO_LOGIN" ?
                      <button onClick={setActivePage.bind(this, "LOGIN")}>Go back to login </button>
                      : errCode === "GOTO_SIGNUP" ?
                        <button onClick={setActivePage.bind(this, "SIGNUP")}>Go back to login </button>
                        :
                        <button onClick={setActivePage.bind(this, "LOGIN")}>Go back to login </button>
                  }
                </div>
                :
                <div>
                  <h1> Oops!!, Unexpected Error.  </h1>
                </div>
      }
    </>
  );
}

export default App;
