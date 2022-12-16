import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateMember } from "./app/memberSlice";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";


export function PickRooms() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [pets, setPets] = useState("");


  function handleSubmit() {
    console.log(bathrooms)
    const action = updateMember({
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        pets: pets,
     });
    dispatch(action);
    navigate('/step1')
  }

  return (
    <div class="container">
      <div class="col-4 mx-auto" style={{marginTop:"5vh"}}>
        <div className="card">
          <div className="card-body" >
            <div className="card-body text-center">
              <form>
                <fieldset className="form-group" onChange={(e) => setBedrooms(e.target.value)}>
                  <div className="row">
                    <legend className="col-form-label col-sm-6 pt-0">Bedrooms</legend>
                    <div className="col-sm-6">
                      <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="bedrooms" id="bedroom1" value="1"/>
                        <label className="form-check-label" htmlFor="gridRadios1" style={{marginLeft:"5px"}}>
                            1
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="bedrooms" id="bedroom2" value="2"/>
                        <label className="form-check-label" htmlFor="gridRadios2" style={{marginLeft:"5px"}}>
                            2
                        </label>
                      </div>
                    </div>
                </div>
              </fieldset>
              <br/>
              <fieldset className="form-group" onChange={(e) => setBathrooms(e.target.value)}>
                <div className="row">
                  <legend className="col-form-label col-sm-6 pt-0">Bathrooms</legend>
                  <div className="col-sm-6">
                    <div className="form-check-inline">
                      <input className="form-check-input" type="radio" name="bathrooms" id="bathroom1" value="1"/>
                      <label className="form-check-label" htmlFor="gridRadios1" style={{marginLeft:"5px"}}>
                          1
                      </label>
                    </div>
                      <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="bathrooms" id="bathroom2" value="2"/>
                        <label className="form-check-label" htmlFor="gridRadios2" style={{marginLeft:"5px"}}>
                            2
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <br/>
                <fieldset className="form-group" onChange={(e) => setPets(e.target.value)}>
                  <div className="row">
                    <legend className="col-form-label col-sm-6 pt-0">Pets</legend>
                      <div className="col-sm-6">
                        <div className="form-check-inline">
                          <input className="form-check-input" type="radio" name="pets" id="pet0" value="0"/>
                          <label className="form-check-label" htmlFor="gridRadios1" style={{marginLeft:"5px"}}>
                              0
                          </label>
                        </div>
                        <div className="form-check-inline">
                          <input className="form-check-input" type="radio" name="pets" id="pet1" value="1"/>
                          <label className="form-check-label" htmlFor="gridRadios2" style={{marginLeft:"5px"}}>
                              1
                          </label>
                        </div>
                                                <div className="form-check-inline">
                          <input className="form-check-input" type="radio" name="pets" id="pet2" value="2"/>
                          <label className="form-check-label" htmlFor="gridRadios2" style={{marginLeft:"5px"}}>
                              2
                          </label>
                        </div>
                      </div>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary" style={{marginTop:"5vh"}} onClick={handleSubmit}>Next</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickRooms;
