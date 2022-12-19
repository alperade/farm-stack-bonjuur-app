import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMember } from "./app/memberSlice";
import { useNavigate } from "react-router-dom";


const HouseDetails = () => {
  const [apt, setApt] = useState("");
  const [phone, setPhone] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [pets, setPets] = useState("");
  const [humans, setHumans] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  function handleSubmit() {
    const action = updateMember({
      apt: apt,
      phone: phone,
      bedrooms:bedrooms,
      bathrooms: bathrooms,
      pets: pets,
      humans: humans,
    });
    dispatch(action);
    if (apt !== "" && phone !== "" && bedrooms !== "" && bathrooms !== "" && pets !== "" && humans !== "") {
      navigate('/step4')
    }
  }

  return (
<form>
  <div className="col-md-4 mx-auto">
    <label htmlFor="validationDefault01" className="form-label">Apartment Number</label>
    <input
      type="text"
      className="form-control"
      value={apt}
      id="validationDefault01"
      placeholder="ie. 5K"
      onChange={(e) => setApt(e.target.value)}
      required/>
  </div>
  <div className="col-md-4 mx-auto">
    <label htmlFor="validationDefault02" className="form-label">Phone Number</label>
    <input
      type="tel"
      className="form-control"
      id="validationDefault02"
      placeholder="Phone Number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required/>
  </div>
  <div className="col-md-4 mx-auto">
    <label htmlFor="validationDefault03" className="form-label">Bedrooms</label>
    <select className="form-select" onChange={(e) => setBedrooms(e.target.value)} id="validationDefault03" required>
      <option selected disabled value="">Choose...</option>
      <option value="0">Studio</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  </div>
  <div className="col-md-4 mx-auto">
    <label htmlFor="validationDefault04" className="form-label">Bathrooms</label>
    <select className="form-select" onChange={(e) => setBathrooms(e.target.value)} id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  </div>
    <div className="col-md-4 mx-auto">
    <label htmlFor="validationDefault05" className="form-label">Pets</label>
    <select className="form-select" onChange={(e) => setPets(e.target.value)} id="validationDefault05" required>
      <option selected disabled value="">Choose...</option>
      <option value="0">No Pets</option>
      <option value="1">1</option>
      <option value="2">2 or more</option>
    </select>
  </div>
  <div className="col-md-4 mx-auto">
    <label htmlFor="validationDefault06" className="form-label">Humans</label>
    <select className="form-select" onChange={(e) => setHumans(e.target.value)} id="validationDefault06" required>
      <option selected disabled value="">Choose...</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3+">3 or more</option>
    </select>
  </div>
  <div className="col-md-4 mx-auto" style={{marginTop:"1rem"}}>
    <button className="btn btn-primary float-end" onClick={handleSubmit} type="submit">Next</button>
  </div>
</form>
  );
};

export default HouseDetails;
