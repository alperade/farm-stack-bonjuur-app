import React from "react";
import { useSelector } from "react-redux";
import { useGetRestaurantsQuery } from "../../app/yelpApi";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import { useAddEventMutation } from "../../app/eventApi";
import { preventDefault } from "../../app/utils";
import { useGetTokenQuery } from "../../app/accountApi";

export function ListRestaurants() {
  const search = useSelector((state) => state.search);
  const itineraryId = useSelector((state) => state.itinerary.itineraryId);
  const { data: token } = useGetTokenQuery();
  const body = useGetRestaurantsQuery(search);
  const isLoading = body.isLoading;
  const [addEvent] = useAddEventMutation();

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      {body.data.map((restaurant) => (
        <Card
          className="item-border"
          border="light"
          style={{ width: "50rem" }}
          key={restaurant.image_url}
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
                    href={restaurant.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card.Img
                      className="card-image"
                      src={restaurant.image_url}
                    />
                  </a>
                </Col>
                <Col>
                  <Card.Body>
                    <Row>
                      <Col sm={10}>
                        <Card.Title>
                          <a
                            href={restaurant.url}
                            target="_blank"
                            className="link-green"
                            rel="noopener noreferrer"
                          >
                            {restaurant.name}
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
                        <Card.Text>{restaurant.location}</Card.Text>
                      </Col>
                      <Col>
                        <Card.Text style={{ textAlign: "right" }}>
                          Rating: {restaurant.rating}
                        </Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card.Text className="text-muted">
                          {restaurant.description}
                        </Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Card.Text as="small">{restaurant.address}</Card.Text>
                    </Row>
                    <input
                      name="name"
                      as="textarea"
                      value={restaurant.name ? restaurant.name : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="location"
                      as="textarea"
                      value={restaurant.location ? restaurant.location : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="date"
                      as="datetime"
                      value={restaurant.date ? restaurant.date : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="category"
                      as="textarea"
                      value={restaurant.category ? restaurant.category : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="rating"
                      as="textarea"
                      value={restaurant.rating ? restaurant.rating : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="venue"
                      as="textarea"
                      value={restaurant.venue ? restaurant.venue : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="address"
                      as="textarea"
                      value={restaurant.address ? restaurant.address : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="description"
                      as="textarea"
                      value={
                        restaurant.description ? restaurant.description : ""
                      }
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="image_url"
                      as="textarea"
                      value={restaurant.image_url}
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
      ))}
    </div>
  );
}

export default ListRestaurants;
