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
                        <h3 className="card-title">Just Keeping</h3>
                        <h5 className="card-text">$80 per week</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Mail and Package Collection from the lobby. Don't worry, we will separate circulars; Flatten & recycle empty boxes.</li>
                            <li className="list-group-item">Tidy up all the rooms, sorting everything back to its place, including your ever-missing remote controls!</li>
                            <li className="list-group-item">Kitchen cleaning. Empty and replace the waste basket. Put dishes into the dishwasher, including your empty coffee cup remaining in the living room. we got you covered!</li>
                            <li className="list-group-item">Bathroom Cleaning. Clean the sink and that toothpaste residue too. Oh yes, we are aware that's not the only residue we will clean. We will put down the toilet seat too, no worries.</li>
                            <li className="list-group-item">Bedroom cleaning. we will make your bed and fluff your pillows. Your bedroom would be calling for restful sleep.</li>
                        </ul>
                        </div>
                        <div className="card-footer">
                        <button className="btn btn-primary mx-auto" onClick={e => handleInput(e, "value")} value="Just Keeping">Subscribe to Just Keeping</button>
                    </div>
                </div>
                <div className="card" style={{margin:"1rem"}}>
                    <div className="card-body">
                        <h3 className="card-title">Keeping+</h3>
                        <h5 className="card-text">$150 per week</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Dust lamps, fixtures, ceiling fans, window ledges, blinds, furniture, shelves, and decor.</li>
                            <li className="list-group-item">Wipe down doors and light switches.</li>
                            <li className="list-group-item">Wipe down countertops and appliances.</li>
                            <li className="list-group-item">Clean microwave inside and out.</li>
                            <li className="list-group-item">Shine stainless steel appliances.</li>
                            <li className="list-group-item">Vacuum floors and sofas. Yes, we will remove the cushions and clean the remaining popcorn.</li>
                            <li className="list-group-item">Mop and sweep floors.</li>
                            <li className="list-group-item">Clean and disinfect the shower, tub, sink, and toilet. Shine mirrors and glass surfaces.</li>
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
