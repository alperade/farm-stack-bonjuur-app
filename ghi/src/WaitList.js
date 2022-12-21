import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMember } from "./app/memberSlice";
import { useNavigate } from "react-router-dom";
import { useGetTokenQuery } from "./app/accountApi";
import { useGetMembersQuery } from "./app/memberApi";
import { useAddWaitListEmailMutation } from "./app/waitlistApi";
import { preventDefault } from "./app/utils";
import { Alert } from "react-bootstrap";


const WaitList = () => {
  const [addWaitListEmail, { data }] = useAddWaitListEmailMutation();
  const { data: memberData } = useGetMembersQuery();
  const { data: tokenData } = useGetTokenQuery();
  const navigate = useNavigate();

  if (memberData && tokenData) {
      let userEmail = tokenData && tokenData.account.email;
      let result = memberData.members.filter(member => member.email == userEmail)[0];
      if (result) {
        navigate('/details')
      }}

  if (data) {
    return (
      <div>
        <Alert key="success" variant="success">
          Thank you for signing up to our waitlist!
        </Alert>
      </div>
    );
  }

  return (
<form onSubmit={preventDefault(addWaitListEmail, (e) => e.target)}>
  <div className="col-md-4 mx-auto" style={{marginTop:"5vh"}}>
    <label htmlFor="validationDefault01" className="form-label">Email</label>
    <input
      type="text"
      className="form-control"
      name="email"
      id="validationDefault01"
      placeholder="Email"
      required/>
  </div>
    <div className="col-md-4 mx-auto">
    <label htmlFor="validationDefault02" className="form-label">Address</label>
    <input
      type="text"
      className="form-control"
      name="address"
      id="validationDefault02"
      placeholder="Address"
      required/>
  </div>
  <div className="col-md-4 mx-auto" style={{marginTop:"1rem"}}>
    <button className="btn btn-primary float-end" type="submit">Join the waitlist!</button>
  </div>
</form>
  );
};

export default WaitList;
