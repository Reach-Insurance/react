import React, { useState, useEffect } from "react";
import loadingGif from "../images/ajax-loader.gif";
import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://byolfysahovehogqdena.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5b2xmeXNhaG92ZWhvZ3FkZW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg3NTcwMTYsImV4cCI6MTk2NDMzMzAxNn0.Q5h8nwP-qy1o5oDa0UCAgj1m7vTXOlhPyoZRC-0CNnk";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function ListingTable({ insurerContract: insurerContractHandle, addr }) {
    const [loading, setLoading] = useState(true);
    const [dataFromBackend, setDataFromBackend] = useState([]);
    const [currentUser, setCurrentUser] = useState({ phone: "", email: "", fullname: "" });
    const [errorFromBackend, setErrorFromBackend] = useState("");

    useEffect(() => {
        const fetchClaimNotifications = async () => {
            const { data: claimObjects } = await supabaseClient.from("claimnotifications").select("claimId").match({ member: addr, responded: false });
            const claimIds = claimObjects.map(c => c.claimId);
            const { data: claimsArr, error } = await supabaseClient.from("claims").select("*").in("id", `${claimIds}`);
            if (error) {
                setErrorFromBackend(error.message);
                setDataFromBackend([]);
            } else {
                setDataFromBackend(claimsArr);
            }
            const { data: currentUserArr, error: er } = await supabaseClient.from("members").select("*").match({ memberAddr: addr });
            if (er) {
                setErrorFromBackend(er.message);
            } else {
                if (currentUserArr.length > 0) {
                    setCurrentUser(currentUserArr[0]);
                }
            }
            setLoading(false);
        }
        fetchClaimNotifications();
    }, []);

    const respondToClaim = async ({ claimId, claimant, defaultAmnt = 0, claimAmnt, claimCurrency = "UGX" }) => {
        const setAmount = prompt(`${currentUser.fullname} requested for ${claimCurrency} ${claimAmnt}. 
        In case you think this amount is too much or too little, 
        then enter the amount you suggest in the input box below. 
        If you don't even want to allow this person to be funded, just enter 0`, defaultAmnt);
        const ok = await insurerContractHandle.apis.CommunityMember.respondToClaim({
            claimant, accepted: true, setAmount
        });

        if (ok) {
            //update the approvalsCount of this claim in the claims table
            const { data: updatedClaim, error } = await supabaseClient.from("claims").update("approvalsCount", "").eq('id', claimId);
            console.log("updatedClaim=", updatedClaim, "error =", error);
        } else {
            console.log("Oops! The backend failed to process your response to the claim.");
        }

        //delete the link btn this member and the claim (ie, in the claimnotifications table), 
        //so that he will not see it again on the list of open claims
        const { error } = await supabaseClient.from("claimnotifications").delete().match({ member: addr, claimId });
        if (error) {
            console.log("Failed to delete the notification link btn member and claim", error);
        }
    };

    return (
        <div className="w-full p-3">
            {/*<!--Table Card-->*/}
            <div className="bg-white border rounded shadow">
                <div className="border-b p-3">
                    <h5 className="font-bold uppercase text-gray-600"> Open claims </h5>
                </div>
                <div className="p-5" style={{ overflowX: "scroll", maxWidth: "100vw" }}>
                    <table className="w-full p-5 text-gray-700">
                        <thead>
                            <tr>
                                <th className="text-left text-blue-900">Date</th>
                                <th className="text-left text-blue-900">Claimant</th>
                                <th className="text-left text-blue-900">Description</th>
                                <th className="text-left text-blue-900">Amount</th>
                                <th className="text-left text-blue-900">Approvals</th>
                                <th className="text-left text-blue-900">Deadline</th>
                                <th className="text-left text-blue-900">Contact</th>
                                <th className="text-left text-blue-900">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ?
                                    <tr>
                                        <td colSpan="5">
                                            <img src={loadingGif} width="30px" />
                                        </td>
                                    </tr>
                                    : errorFromBackend !== "" ?
                                        <tr><td colSpan="6"> <p> {errorFromBackend} </p> </td></tr>
                                        : dataFromBackend.map((v, k) =>
                                            <tr key={k}>
                                                <td> {v.created_at} </td>
                                                <td> {v.claimant} {v.fullName} </td>
                                                <td> {v.description} </td>
                                                <td> {v.amountRequested} </td>
                                                <td> {v.approvalsCount} </td>
                                                <td> {v.deadline} </td>
                                                <td> {currentUser.phone}, {currentUser.email} </td>
                                                <td> <button className="bg-green text-white" onClick={respondToClaim.bind(this, { claimId: v.id, claimant: v.claimant, defaultAmnt: v.amountRequested, claimAmnt: v.amountRequested })}>Respond</button> </td>
                                            </tr>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
            {/*<!--/table Card-->*/}
        </div>
    );

}


export default ListingTable;