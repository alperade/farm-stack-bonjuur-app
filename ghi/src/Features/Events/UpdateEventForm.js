import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useGetItinerariesQuery } from "../../app/itineraryApi";
import { useGetEventsQuery, useUpdateEventMutation } from "../../app/eventApi";
import { preventDefault } from "../../app/utils";

const UpdateEventForm = () => {
  const [updateEvent, { data }] = useUpdateEventMutation();

  const body = useGetItinerariesQuery();
  const eventsBody = useGetEventsQuery();

  // this is a temporary placeholder for either a
  // redirect using useNavigate or a better looking success alert.
  if (data) {
    return (
      <div>
        <Alert key="success" variant="success">
          You have successfully updated an event. Please visit your itineraries
          page if you would like to see the details.
        </Alert>
      </div>
    );
  }

  if (body.isLoading || eventsBody.isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const itineraries = body.data.itineraries;
  const events = eventsBody.data.events;

  return (
    <div>
      <Form
        className="register-form"
        method="post"
        onSubmit={preventDefault(updateEvent, (e) => e.target)}
      >
        <Container>
          <Row>
            <Col sm={8}>
              <Card
                className="item-border"
                border="light"
                style={{ width: "40rem" }}
              >
                <Card.Title className="centered">
                  Update a Custom Event
                </Card.Title>
                <Card.Body>
                  <Row>
                    <Col sm={4}>
                      <Form.Label>Select an Event</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Select name="id">
                        Event
                        <option>events</option>
                        {events.map((event) => {
                          return (
                            <option key={event.id} value={[event.id]}>
                              {event.name}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>
                      <Form.Label>Select an Itinerary</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Select name="itinerary">
                        Itinerary
                        <option>itineraries</option>
                        {itineraries.map((itinerary) => {
                          return (
                            <option
                              key={itinerary.id}
                              value={[itinerary.id, itinerary.location]}
                            >
                              {itinerary.name}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Event Name</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter event name"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Date</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        name="date"
                        type="date"
                        placeholder="Date"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Description</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        name="description"
                        as="textarea"
                        label="Description"
                      />
                    </Col>
                  </Row>
                  <Button variant="outline-success" type="submit">
                    Update Event
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default UpdateEventForm;
