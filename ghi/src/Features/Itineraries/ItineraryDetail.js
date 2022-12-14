import { useGetEventsQuery } from "../../app/eventApi";
import ErrorNotification from "../../ErrorNotification";
import { Card, Form, Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

function ItineraryDetail() {
  const { data, error, isLoading } = useGetEventsQuery();

  const [searchParams] = useSearchParams();
  const initialid = searchParams.get("initialid");

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      <ErrorNotification error={error} />
      {data.events
        .filter((event) => event.itinerary_id === initialid)
        .map((event) => {
          return (
            <Card
              className="item-border"
              border="light"
              style={{ width: "40rem" }}
              key={event.image_url}
            >
              <Container>
                <Form.Label>{event.itinerary_name}</Form.Label>
                <Row>
                  <Col>
                    <Card.Img className="card-image" src={event.image_url} />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title>{event.name}</Card.Title>
                      <Card.Text>
                        Date: {new Date(event.date).toLocaleDateString()}
                      </Card.Text>
                      <Card.Text>Location: {event.location}</Card.Text>
                      <Card.Text>Description: {event.description}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Container>
            </Card>
          );
        })}
    </div>
  );
}

export default ItineraryDetail;
