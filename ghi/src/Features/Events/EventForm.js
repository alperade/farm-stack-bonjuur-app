import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useGetItinerariesQuery } from "../../app/itineraryApi";
import { useGetTokenQuery } from "../../app/accountApi";
import { useAddEventMutation } from "../../app/eventApi";
import { preventDefault } from "../../app/utils";

const EventForm = () => {
  const [addEvent, { data }] = useAddEventMutation();
  const { data: tokenData } = useGetTokenQuery();
  const accountId = tokenData && tokenData.account && tokenData.account.id;
  const body = useGetItinerariesQuery();
  // this is a temporary placeholder for either a
  // redirect using useNavigate or a better looking success alert.
  if (data) {
    return (
      <div>
        <Alert key="success" variant="success">
          You have successfully created a new event. Please visit your
          itineraries page if you would like to see the details.
        </Alert>
      </div>
    );
  }

  if (body.isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  const itineraries = body.data.itineraries;

  return (
    <div>
      <Form
        className="register-form"
        method="post"
        onSubmit={preventDefault(addEvent, (e) => e.target)}
      >
        <Container>
          <Row className="item-border">
            <Card
              className="item-border"
              border="light"
              style={{ width: "40rem" }}
            >
              <Card.Title className="centered">
                Create a Custom Event
              </Card.Title>
              <Card.Body>
                <Row>
                  <Col sm={4}>
                    <Form.Label>Select an Itinerary</Form.Label>
                  </Col>
                  <Col className="mb-3" sm={8}>
                    <Form.Select name="itinerary">
                      Itinerary
                      <option>Itineraries</option>
                      {itineraries
                        .filter(
                          (itinerary) => itinerary.account_id === accountId
                        )
                        .map((itinerary) => {
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
                    <Form.Control name="date" type="date" placeholder="Date" />
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
                <Button variant="success" type="submit">
                  Add to Itinerary
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default EventForm;
