import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateMember } from "./app/memberSlice";
import { useGetTokenQuery } from "./app/accountApi";
import { useGetMembersQuery } from "./app/memberApi";

export function PickBuilding() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const buildings = ["200 W End Avenue", "606 W 57th Street", "455 W 37th Street", "595 Dean St."]
    const { data: memberData } = useGetMembersQuery();
    const { data: tokenData } = useGetTokenQuery();

    if (memberData && tokenData) {
        let userEmail = tokenData && tokenData.account.email;
        let result = memberData.members.filter(member => member.email == userEmail)[0];
        if (result) {
          navigate('/details')
        }}

    function handleInput(e) {
        let address = e.target.attributes.value.value
        const action = updateMember({ address: address});
        dispatch(action);
        navigate('/step3')
  }


  return (
    <div className="container">
      <div className="col-4 mx-auto" style={{marginTop:"5vh"}}>
        <div className="card">
          <div className="card-body" >
            <div className="card-body text-center">
        {buildings.map((building) => {
            return (
                <button
                    type="button"
                    className="btn btn-outline-dark col-8 mx-auto"
                    onClick={handleInput}
                    value={building}
                    key={building}
                    style={{margin:"1rem", padding:"1rem"}}
                >

                        {building}

                </button>
            );
        })}
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default PickBuilding;
