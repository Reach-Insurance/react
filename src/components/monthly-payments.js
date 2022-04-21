import React, { useState, useEffect } from "react";
import loadingGif from "../images/ajax-loader.gif";
import { createClient } from "@supabase/supabase-js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useConfirm from "../hooks/useConfirm";
import { faWallet } from '@fortawesome/free-solid-svg-icons';
const SUPABASE_URL = "https://byolfysahovehogqdena.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5b2xmeXNhaG92ZWhvZ3FkZW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg3NTcwMTYsImV4cCI6MTk2NDMzMzAxNn0.Q5h8nwP-qy1o5oDa0UCAgj1m7vTXOlhPyoZRC-0CNnk";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


function MonthlyPayments({ insurerContract: insurerContractHandle, addr }) {
    const { confirm } = useConfirm();
    const [amountDue, setAmountDue] = useState(0);
    const [errorFromBackend, setErrorFromBackend] = useState("");
    const [currency, setCurrency] = useState("UGX");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { data: amountArr, error: er } = await supabaseClient.from("members").select("amountDue", "currency").match({ memberAddr: addr });
            if (er) {
                setErrorFromBackend(er.message);
            } else {
                if (amountArr.length > 0) {
                    setAmountDue(amountArr[0].amountDue);
                    if (amountArr[0].currency !== currency) {
                        setCurrency(amountArr[0].currency);
                    }
                }
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    const payMonthlyFee = async () => {
        //convert UGX to ALGO
        const mfee = Math.ceil(amountDue / 2590);
        //TODO: prompt for cnfirmation first, then pay
        const yes = await confirm(`Do you want to pay ${mfee} Algos from your account ?`);
        if (yes) {
            const success = await insurerContractHandle.apis.CommunityMember.payMonthlyFee({ mfee });
            if (success) {
                console.log("Payment recorded successfully.");
                //TODO: update this member's details in members table
                const { data, error } = await supabaseClient.from('members').update({ amountDue: 0 }).match({ memberAddr: addr });
                console.log("data-->", data, "error-->", error);
            } else {
                console.log("Failed to record payment");
            }
        }
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
                        <h5 className="font-bold uppercase text-gray-500"> Monthly fees </h5>
                        <h3 className="font-bold text-3xl">
                            {currency}
                            {
                                loading ?
                                    <span style={{ paddingTop: "1px" }}>
                                        <img src={loadingGif} width="20px" />
                                    </span>
                                    : errorFromBackend === "" ?
                                        amountDue
                                        : <small> {errorFromBackend} </small>

                            } {amountDue && <button onClick={payMonthlyFee} className="bg-blue-200 text-blue-600">pay</button>}
                        </h3>
                    </div>
                </div>
            </div>
            {/*<!--/Metric Card-->*/}
        </div>
    );

}

export default MonthlyPayments;












