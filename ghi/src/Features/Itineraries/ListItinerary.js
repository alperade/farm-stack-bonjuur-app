import {
  useGetItinerariesQuery,
  useDeleteItineraryMutation,
} from "../../app/itineraryApi";
import { useGetTokenQuery } from "../../app/accountApi";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Itineraries() {
  const { data: tokenData } = useGetTokenQuery();
  const accountId = tokenData && tokenData.account && tokenData.account.id;
  const [deleteItinerary] = useDeleteItineraryMutation();
  const { data, isLoading } = useGetItinerariesQuery();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      <form>
        {data.itineraries
          .filter((itinerary) => itinerary.account_id === accountId)
          .map((itinerary) => (
            <Card
              key={itinerary.id}
              className="item-border"
              border="light"
              style={{ width: "40rem" }}
            >
              <Card.Header as="h5">
                <Col>{itinerary.name} </Col>
                <Col>
                  <Link to={`/module3-project-gamma/ItineraryDetail/?initialid=${itinerary.id}`}>
                    <button
                      style={{ float: "right" }}
                      className="button is-primary"
                    >
                      Itinerary Details
                    </button>
                  </Link>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Title>{itinerary.location}</Card.Title>
                <Card.Text>
                  {new Date(itinerary.start_date).toLocaleDateString()} to{" "}
                  {new Date(itinerary.end_date).toLocaleDateString()}
                </Card.Text>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ float: "left" }}
                  onClick={() => deleteItinerary(itinerary.id)}
                >
                  delete
                </button>
                <Link to={`/module3-project-gamma/UpdateItineraryForm/?initialid=${itinerary.id}`}>
                  <Button
                    style={{ float: "right" }}
                    className="button is-primary"
                  >
                    edit Itinerary
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
      </form>
    </div>
  );
}

export default Itineraries;
