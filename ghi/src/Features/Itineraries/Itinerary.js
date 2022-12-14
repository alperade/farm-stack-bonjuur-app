import { Card } from "react-bootstrap";
import { useGetEventsQuery, useDeleteEventMutation } from "../../app/eventApi";
import ItinerarySelect from "./ItinerarySelect";
import { useSelector } from "react-redux";
import { NavLink } from "react-bootstrap";
import { Col } from "react-bootstrap";

function ItineraryList() {
  const [deleteEvent] = useDeleteEventMutation();
  const { data, isLoading } = useGetEventsQuery();
  const { itineraryId } = useSelector((state) => state.itinerary);

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      <ItinerarySelect />
      {data.events
        .filter((event) => event.itinerary_id === itineraryId)
        .map((event) => {
          return (
            <Card
              key={event.id}
              className="item-border"
              style={{ width: "25rem" }}
            >
              <Card.Header as="h6">
                <Col sm={12}>{event.name} </Col>
                <Col sm={1}>
                  <NavLink onClick={() => deleteEvent(event.id)}>
                    <b className="link-delete">&#10005;</b>
                  </NavLink>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Text className="card-bottom">
                  Location: {event.location}
                </Card.Text>
                <Card.Text>
                  Date: {new Date(event.date).toLocaleDateString()}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

export default ItineraryList;
// dates need to be fixed
