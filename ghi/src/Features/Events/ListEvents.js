import React from "react";
import { useSelector } from "react-redux";
import { useGetEventsQuery } from "../../app/yelpApi";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useAddEventMutation } from "../../app/eventApi";
import { preventDefault } from "../../app/utils";
import { useGetTokenQuery } from "../../app/accountApi";
import logo from "../../media/fomore-card.png";

export function ListEvents() {
  const search = useSelector((state) => state.search);
  const itineraryId = useSelector((state) => state.itinerary.itineraryId);
  const body = useGetEventsQuery(search);
  const { data: token } = useGetTokenQuery();
  const isLoading = body.isLoading;
  const [addEvent] = useAddEventMutation();

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }
  if (body.length === 0) {
    return (
      <p>
        No events to display for this time period. Please try another time or
        city.
      </p>
    );
  }

  return (
    <div>
      {body.data.map((event) => {
        return (
          <Card
            className="item-border"
            border="light"
            style={{ width: "50rem" }}
            key={event.url}
          >
            <Form
              className="register-form"
              method="post"
              onSubmit={preventDefault(addEvent, (e) => e.target)}
            >
              <Container>
                <Row>
                  <Col>
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card.Img
                        className="card-image"
                        src={event.image_url ? event.image_url : logo}
                      />
                    </a>
                  </Col>
                  <Col>
                    <Card.Body>
                      <Row>
                        <Col sm={10}>
                          <Card.Title>
                            <a
                              href={event.url}
                              target="_blank"
                              className="link-green"
                              rel="noopener noreferrer"
                            >
                              {event.name}
                            </a>
                          </Card.Title>
                        </Col>
                        {token ? (
                          <Col sm={2}>
                            <button className="add-btn">&#10010;</button>{" "}
                          </Col>
                        ) : (
                          <Col sm={2}>
                            <button className="d-none">&#10010;</button>{" "}
                          </Col>
                        )}
                      </Row>
                      <Row>
                        <Col>
                          <Card.Text>{event.location}</Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Card.Text className="text-muted">
                            {event.description}
                          </Card.Text>
                        </Col>
                      </Row>
                      <input
                        name="name"
                        as="textarea"
                        value={event.name ? event.name : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="location"
                        as="textarea"
                        value={event.location ? event.location : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="date"
                        as="datetime"
                        value={event.date ? event.date : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="category"
                        as="textarea"
                        value={event.category ? event.category : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="venue"
                        as="textarea"
                        value={event.venue ? event.venue : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="description"
                        as="textarea"
                        value={event.description ? event.description : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="image_url"
                        as="textarea"
                        value={event.image_url ? event.image_url : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="itineraryId"
                        as="textarea"
                        value={itineraryId}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                    </Card.Body>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Card>
        );
      })}
    </div>
  );
}

export default ListEvents;
