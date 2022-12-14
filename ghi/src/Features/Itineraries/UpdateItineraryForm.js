import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  useUpdateItineraryMutation,
  useGetItinerariesQuery,
} from "../../app/itineraryApi";
import { preventDefault } from "../../app/utils";
import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const UpdateItineraryForm = () => {
  const [updateItinerary, { data }] = useUpdateItineraryMutation();

  const body = useGetItinerariesQuery();

  const [searchParams] = useSearchParams();
  const initialid = searchParams.get("initialid");
  const [activeid] = useState(initialid);

  if (data) {
    return (
      <div>
        <Alert key="success" variant="success">
          You have successfully updated an itinerary. Please visit your
          itineraries page if you would like to see the details.
        </Alert>
      </div>
    );
  }

  if (body.isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const itineraries = body.data.itineraries;

  const activeItinerary = itineraries.find((i) => i.id === activeid) ?? {};

  return (
    <div>
      <Form
        className="register-form"
        method="post"
        onSubmit={preventDefault(updateItinerary, (e) => e.target)}
      >
        <Container>
          <Row className="item-border">
            <Card
              className="item-border"
              border="light"
              style={{ width: "40rem" }}
            >
              <Card.Title className="centered">Update Itinerary</Card.Title>
              <Card.Body>
                <Row>
                  <Col>
                    <Form.Label>Itinerary Name</Form.Label>
                  </Col>
                  <Col className="mb-3" sm={8}>
                    <Form.Control
                      defaultValue={activeItinerary.name}
                      type="text"
                      name="name"
                      placeholder="Enter event name"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Start Date</Form.Label>
                  </Col>
                  <Col className="mb-3" sm={8}>
                    <Form.Control
                      defaultValue={activeItinerary.start_date?.split("T")[0]}
                      name="start_date"
                      type="date"
                      placeholder="Date"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>End Date</Form.Label>
                  </Col>
                  <Col className="mb-3" sm={8}>
                    <Form.Control
                      defaultValue={activeItinerary.end_date?.split("T")[0]}
                      name="end_date"
                      type="date"
                      placeholder="Date"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Location</Form.Label>
                  </Col>
                  <Col className="mb-3" sm={8}>
                    <Form.Control
                      defaultValue={activeItinerary.location}
                      type="text"
                      name="location"
                      placeholder="Location"
                    />
                  </Col>
                </Row>
                <input
                  name="itinerary"
                  as="textarea"
                  value={activeItinerary.id}
                  style={{ display: "none" }}
                  readOnly
                ></input>
                <div className="control">
                  <button
                    style={{ float: "right" }}
                    className="button is-primary"
                  >
                    Update Itinerary
                  </button>
                </div>
                <div>
                  <Link to="/module3-project-gamma/Itineraries">
                    <button
                      type="button"
                      className="button"
                      style={{ float: "left" }}
                    >
                      Back to Itineraries
                    </button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default UpdateItineraryForm;
