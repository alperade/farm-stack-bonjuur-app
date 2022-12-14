import React from "react";
import { useSelector } from "react-redux";
import { useGetAttractionsQuery } from "../../app/yelpApi";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useGetTokenQuery } from "../../app/accountApi";
import { useAddEventMutation } from "../../app/eventApi";
import { preventDefault } from "../../app/utils";

export function ListAttractions() {
  const search = useSelector((state) => state.search);
  const itineraryId = useSelector((state) => state.itinerary.itineraryId);
  const body = useGetAttractionsQuery(search);
  const { data: token } = useGetTokenQuery();
  const isLoading = body.isLoading;
  const [addEvent] = useAddEventMutation();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      {body.data.map((attraction) => {
        return (
          <Card
            className="item-border"
            border="light"
            style={{ width: "50rem" }}
            key={attraction.image_url}
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
                      href={attraction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card.Img
                        className="card-image"
                        src={attraction.image_url}
                      />
                    </a>
                  </Col>
                  <Col>
                    <Card.Body>
                      <Row>
                        <Col sm={10}>
                          <Card.Title>
                            <a
                              href={attraction.url}
                              target="_blank"
                              className="link-green"
                              rel="noopener noreferrer"
                            >
                              {attraction.name}
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
                          <Card.Text>{attraction.location}</Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Card.Text className="text-muted">
                            {attraction.description}
                          </Card.Text>
                        </Col>
                      </Row>
                      <input
                        name="name"
                        as="textarea"
                        value={attraction.name ? attraction.name : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="location"
                        as="textarea"
                        value={attraction.location ? attraction.location : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="date"
                        as="datetime"
                        value={attraction.date ? attraction.date : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="category"
                        as="textarea"
                        value={attraction.category ? attraction.category : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="venue"
                        as="textarea"
                        value={attraction.venue ? attraction.venue : ""}
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="description"
                        as="textarea"
                        value={
                          attraction.description ? attraction.description : ""
                        }
                        style={{ display: "none" }}
                        readOnly
                      ></input>
                      <input
                        name="image_url"
                        as="textarea"
                        value={attraction.image_url ? attraction.image_url : ""}
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

export default ListAttractions;
