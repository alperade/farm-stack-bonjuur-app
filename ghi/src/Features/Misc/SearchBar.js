import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "../../app/searchSlice";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

export function SearchBar() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();

  function handleSubmit() {
    const action = updateSearch({ location: location, date: date });
    dispatch(action);
    setLocation("");
    setDate("");
    setEndDate("");
  }

  return (
    <div>
      <Form className="d-flex top-margin">
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
      </Form>
    </div>
  );
}

export default SearchBar;
