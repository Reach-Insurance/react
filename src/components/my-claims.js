import React, { useState, useEffect } from "react";
import loadingGif from "../images/ajax-loader.gif";
import { createClient } from "@supabase/supabase-js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useConfirm from "../hooks/useConfirm";
import { faWallet } from '@fortawesome/free-solid-svg-icons';
const SUPABASE_URL = "https://byolfysahovehogqdena.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5b2xmeXNhaG92ZWhvZ3FkZW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg3NTcwMTYsImV4cCI6MTk2NDMzMzAxNn0.Q5h8nwP-qy1o5oDa0UCAgj1m7vTXOlhPyoZRC-0CNnk";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


function MyClaims({ addr, setShowNewClaimForm }) {
    const { confirm } = useConfirm();
    const [claim, setClaim] = useState({ amountRequested: 0, approvalsCount: 0 });
    const [errorFromDb, setErrorFromDb] = useState("");
    const [loading, setLoading] = useState(true);
    const [hasClaim, setHasClaim] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const { data: claimArr, error: er } = await supabaseClient.from("claims").select("*").match({ memberAddr: addr });
            if (er) {
                setErrorFromDb(er.message);
            } else {
                if (claimArr.length > 0) {
                    setClaim(claimArr[0]);
                    setHasClaim(true);
                } else {
                    setHasClaim(false);
                }
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    const showNewClaimForm = async () => {
        setShowNewClaimForm(true);
    };

    return (
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*<!--Metric Card-->*/}
            <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                    <div className="flex-shrink pr-4">
                        <div className="rounded p-3 bg-green-600"><FontAwesomeIcon icon={faWallet} /></div>
                    </div>
                    <div className="flex-1 text-center md:center-center">
                        <h5 className="font-bold uppercase text-gray-500"> Your insurance claim </h5>
                        <h3 className="font-bold text-3xl">
                            {
                                loading ?
                                    <span style={{ paddingTop: "1px" }}>
                                        <img src={loadingGif} width="20px" />
                                    </span>
                                    : errorFromDb === "" ?
                                        <>
                                            {hasClaim &&
                                                <>
                                                    <b>Claim status : </b> <br />
                                                    <span>{claim.approvalsCount} aprovals</span><br />
                                                    <span>Amount requested : {claim.amountRequested}</span>
                                                </>
                                            }
                                            {(!hasClaim) &&
                                                <>
                                                    No open claim
                                                </>
                                            }
                                            amountDue
                                        </>
                                        : <small> {errorFromDb} </small>
                            } {(!hasClaim) && <button onClick={showNewClaimForm} className="bg-blue-200 text-blue-600">New Claim</button>}
                        </h3>
                    </div>
                </div>
            </div>
            {/*<!--/Metric Card-->*/}
        </div>
    );

}

export default MyClaims;

