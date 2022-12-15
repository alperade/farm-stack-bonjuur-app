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
//   const [humans, setHumans] = useState("");
//   const [pets, setPets] = useState("");


  function handleSubmit() {
    console.log(bathrooms)
    const action = updateMember({
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        // humans: humans,
        // pets: pets,
     });
    dispatch(action);
    navigate('/step1')
  }

  return (
    <div>
    <form>
        <fieldset className="form-group" onChange={(e) => setBedrooms(e.target.value)}>
            <div className="row">
                <legend className="col-form-label col-sm-1 pt-0">Bedrooms</legend>
                <div className="col-sm-10">
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
                <legend className="col-form-label col-sm-1 pt-0">Bathrooms</legend>
                <div className="col-sm-10">
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



    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>






      {/* <Form className="d-flex top-margin">
        <Form.Control
          size="sm"
          type="search"
          placeholder="Location"
          className="me-2"
          aria-label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <InputGroup size="sm" className="me-2">
          <InputGroup.Text id="basic-addon3">Dates</InputGroup.Text>
          <Form.Control
            type="date"
            placeholder="Start Date"
            className="me-0"
            aria-label="Start Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Form.Control
            type="date"
            placeholder="End Date"
            className="me-0"
            aria-label="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </InputGroup>
        <Button variant="outline-light" onClick={handleSubmit}>
          Search
        </Button>
      </Form> */}
    </div>
    );
}

export default PickRooms;
