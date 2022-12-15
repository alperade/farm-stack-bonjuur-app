import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateMember } from "./app/memberSlice";


export function PickMembership() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  function handleInput(e) {
    const action = updateMember({ membership: e.target.value});
    dispatch(action);
    navigate('/step2')
  }

  return (
        <div onClick={e => handleInput(e, "value")}>
            <div className="col-sm-6 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Just Keeping</h5>
                        <p className="card-text">$80 per week</p>
                        <button className="btn btn-primary" value="Just Keeping">Subscribe to Just Keeping</button>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Keeping+</h5>
                        <p className="card-text">$150 per week</p>
                        <button className="btn btn-primary" value="Keeping+">Subscribe to Keeping+</button>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default PickMembership;
