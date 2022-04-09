import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import loadingGif1 from './images/ajax-loader.gif';
import * as backend from './reach-build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { createClient } from "@supabase/supabase-js";
import useConfirm from "./hooks/useConfirm";
import { v4 } from 'uuid';

const reach = loadStdlib(process.env);
const SUPABASE_URL = "https://byolfysahovehogqdena.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5b2xmeXNhaG92ZWhvZ3FkZW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg3NTcwMTYsImV4cCI6MTk2NDMzMzAxNn0.Q5h8nwP-qy1o5oDa0UCAgj1m7vTXOlhPyoZRC-0CNnk";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function App() {
  const { confirm } = useConfirm();

  const [communityGroupName, setCommunityGroupName] = useState("Test group insurance");
  const [mandatoryEntryFee, setMandatoryEntryFee] = useState(0);
  const insurerContract = useRef(null);
  const algoAccount = useRef(null);

  const mnemonicRef = useRef(<></>);
  const [addressStr, setAddressStr] = useState("");
  const [mnemonicStr, setMnemonicStr] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [activePage, setActivePage] = useState("LOGIN");
  const [insrPackage, setInsrPackage] = useState("");
  const [deployed, setDeployed] = useState(false);
  const [isSavingContractInfo, setIsSavingContractInfo] = useState(false);
  const [contractInfoSaved, setContractInfoSaved] = useState(false);
  const [errMessage, setErrMessage] = useState("Err occured.");
  const [errCode, setErrCode] = useState("GOTO_LOGIN");
  const [deployerModeOn, setDeployerModeOn] = useState(false);


  useEffect(() => {
    async function readFromDb() {
      try {
        //fetch the contract info
        const { data: infoArr, error } = await supabaseClient.from("smartcontracts").select("info").eq('name', "insurancedapp");
        if (error) { throw error; }
        //if info was found, 
        if (infoArr.length > 0) {
          setDeployed(true);
        }
      } catch (er) {
        console.log("Oops! Failed to fetch the contract info/address", er);
      }
    }

    readFromDb();
  }, []);

  function Login() {
    algoAccount.current = reach.newAccountFromMnemonic(mnemonicStr);
    if (!deployed) {
      const showConfirmPopup = async () => {
        const wantToDeployContract = await confirm('The insurer contract is not yet deployed. Are you the insurer ? Deploy it.');
        if (wantToDeployContract) {
          setActivePage("DEPLOYER");
        } else {
          setErrMessage("Wait for the insurer to deploy the contract, or contact them for help");
          setErrCode("GOTO_LOGIN");
          setActivePage("ERROR");
        }
      }
      showConfirmPopup();
    } else if (deployerModeOn) {
      setActivePage("DEPLOYER");
    } else {

      async function accessDb() {
        let isRegisteredMember = false;
        const memberAddr = reach.formatAddress(algoAccount.current);
        const { data: memberDataArr, error } = await supabaseClient.from("members").select("*").eq('memberAddr', memberAddr);
        if (error) {
          setErrMessage(JSON.stringify(error));
          setErrCode("GOTO_LOGIN");
          setActivePage("ERROR");
        }
        if (memberDataArr.length > 0) {
          isRegisteredMember = true;
        }
        if (isRegisteredMember) {
          setActivePage("DASHBOARD");
        } else {
          setActivePage("SIGNUP");
        }
      }
      accessDb();
    }
  }

  function newAlgoAccount() {
    alert(`NOTE: a new algo account is being created for you, 
    please dont forget to copy your new mnemonic and keep it secret.`);
    //create new algo account
    algoAccount.current = reach.newTestAccount();
    const newMnemonic = reach.unsafeGetMnemonic(algoAccount.current);
    setMnemonicStr(newMnemonic);
    Login();
  }

  function Signup() {
    if (!email || email === "") {
      alert("Email is required");
    } else if (!phone || phone === "") {
      alert("Phone number is required");
    } else if (!fullname || fullname === "") {
      alert("Full name number is required");
    } else if (!insrPackage || insrPackage === "") {
      alert("Please select your insurance package");
    }
    const success = backend._APIs.Insurer.registerMembership({
      fullName: fullname, phone, email,
      chosenInsurancePackage: insrPackage
    });
    if (success) {
      alert("Registered successfully.");
    } else {
      alert("Failed to register");
    }
  }

  backend.Insurer.saveNewMemberDetails = useCallback(({ fullName, phone, email, chosenInsurancePackage }) => {
    async function accessDb() {
      const { error } = await supabaseClient.from("members").insert([{
        fullName, phone, email, chosenInsurancePackage
      }]);
      if (error) {
        console.log(error);
      } else {
        alert("Details save successfully");
      }
    }
    accessDb();
  });

  const deployContract = useCallback(() => {
    const insurerAccount = algoAccount.current;
    //deploy the contract
    setIsSavingContractInfo(true);
    insurerContract.current = insurerAccount.contract(backend);
    //save the contract info into supabase
    supabaseClient.from("smartcontracts").insert([{
      name: "insurancedapp", info: JSON.stringify(insurerContract.current.getInfo())
    }]).then(({ data, err }) => {
      setIsSavingContractInfo(false);
      if (err) {
        console.log(`Error while saving the contract info to supabase ${err}`);
        console.log(`Saved contract info to supabase: ${JSON.stringify(data)}`);
      }
    });

    // Set deployed contract Init state
    backend.Insurer.interact.communityGroupName = communityGroupName;
    backend.Insurer.interact.mandatoryEntryFee = mandatoryEntryFee;
    backend.Insurer.interact.contractIsRunning = true;
  }, []);

  const stopContract = useCallback(() => {
    //TODO: delete info record from supabase
    backend.Insurer.interact.contractIsRunning = false;
    setContractInfoSaved(false);
  }, []);

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

            <h1 className='text-xl font-medium text-primary mt-6 mb-6 text-center'>
              Enter Your mnemonic to Login
            </h1>

            <form >
              <div>
                <input ref={mnemonicRef}
                  type="text"
                  value={mnemonicStr}
                  onChange={e => setMnemonicStr(e.target.value)}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id='mnemonic'
                  placeholder='12-word phrase'
                />
              </div>

              <div>
                <label>Have no Algorand account ? <span onClick={newAlgoAccount} href='#' className='text-blue-600'>Create a new</span> </label>

              </div>

              <div className='flex justify-center items-center mt-6'>
                <button onClick={Login}
                  className={` bg-blue-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-greenn-dark`}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        : (activePage === "SIGNUP") ?
          <div className='h-screen flex bg-blue-100'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-2 px-16 shadow'>
              <h1 className='text-4xl text-blue-700  text-primary mt-2 mb-2 text-center'> Insurance Dapp </h1>
              <hr />
              <small> Keep your mnemonic secret: ( {mnemonicStr} ) </small>
              <hr />

              <h1 className='text-xl font-medium text-primary mt-6 mb-6 text-center'>
                Register for insurance services
              </h1>

              <form >
                <div>
                  <label htmlFor='fullname'>Full name </label>
                  <input
                    type="text"
                    value={fullname}
                    onChange={e => setFullname(e.target.value)}
                    className={`w-full py px-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id='fullname'
                  />
                </div>

                <div>
                  <label htmlFor='phone'>Phone number </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className={`w-full py px-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id='phone'
                  />
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={`w-full py px-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    placeholder='your@email.com'
                  />
                </div>

                <div>
                  <label htmlFor='phone'> Select the insurance package you prefer </label>
                  <select
                    type="select"
                    value={insrPackage}
                    onChange={e => setInsrPackage(e.target.value)}
                    className={`w-full py px-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  >
                    <option> package1 - 1000 - 120,000 </option>
                    <option> package2 - 5000 - 600,000 </option>
                    <option> package3 - 10,000 - 1,200,000 </option>
                    <option> package4 - 50,000 - 6,000,000 </option>
                    <option> package5 - 100,000 - 12,000,000 </option>
                    <option> package6 - 500,000 - 60,000,000 </option>
                  </select>
                </div>


                <div className='flex justify-center items-center mt-6'>
                  <button onClick={Signup}
                    className={`bg-blue-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-greenn-dark`}
                  >
                    Register now
                  </button>
                </div>
              </form>
            </div>
          </div >
          : (activePage === "DASHBOARD") ?
            <div>
              Dashboard
            </div>
            : (activePage === "DEPLOYER") ?
              <div className='h-screen flex bg-blue-100'>
                <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-2 px-16 shadow'>
                  <h1 className='text-4xl text-blue-700  text-primary mt-2 mb-2 text-center'> Insurance Dapp </h1>
                  <hr />
                  <small> Keep your mnemonic secret: ( {mnemonicStr} ) </small>
                  <hr />

                  <h1 className='text-xl font-medium text-primary mt-6 mb-6 text-center'>
                    Register for insurance services
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
                        onChange={e => setMandatoryEntryFee(Number(e.target.value))}
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
                          <img src={loadingGif1} width="50px" />
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
