import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showModal, SIGN_UP_MODAL } from "./app/accountSlice";
import { useGetTokenQuery } from "./app/accountApi";
import { useGetMembersQuery } from "./app/memberApi";

export function SignupStep() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: memberData } = useGetMembersQuery();
    const { data: tokenData } = useGetTokenQuery();

    useEffect(() => {
    let userEmail = tokenData && tokenData.account.email;
    let result = memberData.members.filter(member => member.email == userEmail)[0];

    if (result && userEmail) {
        navigate('/details')
    } else if (userEmail) {
        navigate('/review')
    } else {
        dispatch(showModal(SIGN_UP_MODAL))
    }
})
    // return (
    // <div className="col-1 mx-auto" style={{marginTop:"10vh"}}>
    //         <a href="/step1" class="btn btn-primary">Start Over</a>
    //     </div>
    // )

}

export default SignupStep;
