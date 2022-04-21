import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faTasks,
    faEnvelope,
    faChartArea,
    faWallet,
    faUserPlus,
    faNewspaper,
    faBell,
    faFile, faServer,
    faChartPie
} from '@fortawesome/free-solid-svg-icons';
import { createClient } from "@supabase/supabase-js";
import userPhoto from "./images/my_pic_white.png";
import MyCliams from "./components/my-claims";
import ClaimNotifications from "./components/claim-nitifications";
import MonthlyPayments from "./components/monthly-payments";
import ListingTable from "./components/listing-table";
const SUPABASE_URL = "https://byolfysahovehogqdena.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5b2xmeXNhaG92ZWhvZ3FkZW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg3NTcwMTYsImV4cCI6MTk2NDMzMzAxNn0.Q5h8nwP-qy1o5oDa0UCAgj1m7vTXOlhPyoZRC-0CNnk";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function Dashboard({ addr, insurerContract }) {
    const [showNewClaimForm, setShowNewClaimForm] = useState(false);
    const [description, setDescription] = useState("");
    const [amountRequested, setAmountRequested] = useState(0);
    const [createClaimFeedback, setCreateClaimFeedback] = useState("");


    const createNewClaim = async (e) => {
        e.preventDefault();
        const memberAccount = algoAccount.current;
        const insurerContractHandle = memberAccount.contract(backend, contractInfo.current);
        const ok = await insurerContractHandle.apis.CommunityMember.createClaim({
            amountRequested, amountSet: amountRequested, accepted: false, approvalsCount: 0, sumOfSetAmounts: 0
        });
        if (!ok) {
            setCreateClaimFeedback("Claim submission failed.");
        } else {
            setCreateClaimFeedback("OK. Claim submitted.");
        }
    };

    return (
        <>
            <div className="flex flex-wrap">
                <MyCliams addr={addr} setShowNewClaimForm={setShowNewClaimForm} />
                <ClaimNotifications addr={addr} />
                <MonthlyPayments addr={addr} insurerContract={insurerContract} />
            </div>

            {/*<!--Divider-->*/}
            <hr className="border-b-2 border-gray-400 my-8 mx-4" />

            {showNewClaimForm &&
                <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-2 px-16 shadow'>
                    <h1 className='text-4xl text-blue-700  text-primary mt-2 mb-2 text-center'> New claim details </h1>
                    <hr />
                    {(createClaimFeedback !== "") &&
                        <>
                            <span className="text-red">{createClaimFeedback}</span> <hr />
                        </>
                    }
                    <form >
                        <div>
                            <input
                                type="number"
                                value={amountRequested}
                                onChange={e => setAmountRequested(e.target.value)}
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                placeholder="Funding amount reqested"
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                type="text"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                placeholder='Describe your claim'
                            />
                        </div>
                        <hr />
                        <div className='flex justify-center items-center mt-6'>
                            <button onClick={createNewClaim}
                                className={` bg-blue-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-greenn-dark`}
                            >
                                Submit claim
                            </button>
                        </div>
                    </form>
                </div>
            }

            <div className="flex flex-row flex-wrap flex-grow mt-2">
                <ListingTable addr={addr} insurerContract={insurerContract} />
            </div>

        </>
    );
}

export default Dashboard;
