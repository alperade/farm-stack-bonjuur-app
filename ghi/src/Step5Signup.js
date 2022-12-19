import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showModal, SIGN_UP_MODAL } from "./app/accountSlice";
import { useGetTokenQuery } from "./app/accountApi";

export function SignupStep() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: tokenData } = useGetTokenQuery();
    if (tokenData && tokenData.account && tokenData.account.id) {
        navigate('/review')
    } else {
        dispatch(showModal(SIGN_UP_MODAL))
    }
    return (
    <div className="col-1 mx-auto" style={{marginTop:"10vh"}}>
            <a href="/step1" class="btn btn-primary">Start Over</a>
        </div>
    )

}

export default SignupStep;
