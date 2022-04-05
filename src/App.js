import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import * as backend from './reach-build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

function App() {
  const mnemonicRef = useRef(<></>);
  const [addressStr, setAddressStr] = useState("");
  const [mnemonicStr, setMnemonicStr] = useState("");
  const [gotoSignup, setGotoSignup] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [insrPackage, setInsrPackage] = useState("");


  function Login() {
    //alert(mnemonicStr);
    setGotoSignup(true);
  }

  function newAlgoAccount() {
    alert("NOTE: a new algo account is being created for you, please dont forget to copy your new mnemonic and keep it secret.");
    setMnemonicStr("the mnemonic phrase for the newly created account");
  }

  function Signup() {
    //alert("please wait ...");

  }

  return (
    <>
      {(!gotoSignup) ?
        <div className='h-screen flex bg-blue-100'>
          <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-2 px-16 shadow'>
            <h1 className='text-4xl text-blue-700  text-primary mt-2 mb-2 text-center'> Insurance Dapp </h1>
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
        :
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
      }
    </>
  );
}

export default App;
