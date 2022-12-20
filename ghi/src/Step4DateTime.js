import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMember } from "./app/memberSlice";
import { useNavigate } from "react-router-dom";
import { useGetTokenQuery } from "./app/accountApi";
import { useGetMembersQuery } from "./app/memberApi";


const PickDateTime = () => {
  const [start_date, setDate] = useState("");
  const [time_slot, setTime] = useState("");
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

  function handleSubmit() {
    const action = updateMember({
      start_date: start_date,
      time_slot: time_slot,
    });
    dispatch(action);
    if (start_date !== "" && time_slot !== "") {
      navigate('/step5')
    }
  }

  return (
<form>
  <div className="col-md-4 mx-auto">
    <label htmlFor="validationDefault01" className="form-label">Start Date</label>
    <input
      type="date"
      className="form-control"
      value={start_date}
      id="validationDefault01"
      onChange={(e) => setDate(e.target.value)}
      required/>
  </div>
  <div className="col-md-4 mx-auto">
    <label htmlFor="validationDefault02" className="form-label">Time Slot</label>
    <select className="form-select" onChange={(e) => setTime(e.target.value)} id="validationDefault02" required>
      <option selected disabled value="">Choose...</option>
      <option value="Morning 9AM - 12PM">Morning 9AM - 12PM</option>
      <option value="Afternoon 1PM - 3PM">Afternoon 1PM - 3PM</option>
      <option value="Evening 3PM - 5PM">Evening 3PM - 5PM</option>
    </select>
  </div>
  <div className="col-md-4 mx-auto" style={{marginTop:"1rem"}}>
    <button className="btn btn-primary float-end" onClick={handleSubmit} type="submit">Confirm & Review Details</button>
  </div>
</form>
  );
};

export default PickDateTime;
