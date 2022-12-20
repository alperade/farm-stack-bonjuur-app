import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateMember } from "./app/memberSlice";
import { useGetTokenQuery } from "./app/accountApi";
import { useGetMembersQuery } from "./app/memberApi";


export function PickMembership() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: memberData } = useGetMembersQuery();
  const { data: tokenData } = useGetTokenQuery();

  if (memberData && tokenData) {
      let userEmail = tokenData && tokenData.account.email;
      let result = memberData.members.filter(member => member.email == userEmail)[0];
      if (result) {
        navigate('/details')
      }}

  function handleInput(e) {
    const action = updateMember({ membership: e.target.value});
    dispatch(action);
    navigate('/step2')
  }

  return (
            <div className="col-8 mx-auto">
            <div className="card-group">
                <div className="card" style={{margin:"1rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Just Keeping</h5>
                        <p className="card-text">$80 per week</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Mail and Package Collection from the lobby. Don't worry, we will separate circulars; Flatten & recycle empty boxes.</li>
                            <li className="list-group-item">Tidy up all the rooms, sorting everything back to its place, including your ever-missing remote controls!</li>
                            <li className="list-group-item">Kitchen cleaning. Empty and replace the waste basket. Put dishes into the dishwasher, including your empty coffee cup remaining in the living room. we got you covered!</li>
                        </ul>
                        </div>
                        <div className="card-footer">
                        <button className="btn btn-primary mx-auto" onClick={e => handleInput(e, "value")} value="Just Keeping">Subscribe to Just Keeping</button>
                    </div>
                </div>
                <div className="card" style={{margin:"1rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Keeping+</h5>
                        <p className="card-text">$150 per week</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Dust lamps, fixtures, ceiling fans, window ledges, blinds, furniture, shelves, and decor.</li>
                            <li className="list-group-item">Wipe down doors and light switches.</li>
                            <li className="list-group-item">Wipe down countertops and appliances.</li>
                        </ul>
                        </div>
                        <div className="card-footer">
                        <button className="btn btn-primary mx-auto" onClick={e => handleInput(e, "value")} value="Keeping+">Subscribe to Keeping+</button>
                        </div>
                    </div>
                    </div>
                    </div>


  );
}

export default PickMembership;
