import React from "react";
import { useGetItinerariesQuery } from "../../app/itineraryApi";
import ErrorNotification from "../../ErrorNotification";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function ItineraryColumn() {
  const { data, error, isLoading } = useGetItinerariesQuery();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }
  console.log({ data });

  return (
    <div>
      <ErrorNotification error={error} />
      {data.itineraries.map((itinerary) => {
        return (
          <Card
            className="item-border"
            // border="light"
            style={{ width: "25rem" }}
          >
            <Card.Header as="h6">
              {itinerary.name}{" "}
              <Link to="/module3-project-gamma/ItineraryDetail">
                <Button
                  variant="outline-primary"
                  size="sm"
                  style={{ float: "right" }}
                >
                  Go to Itinerary
                </Button>
              </Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>Location: {itinerary.location}</Card.Text>
              <Card.Text>
                Dates: {new Date(itinerary.start_date).toLocaleDateString()} to{" "}
                {new Date(itinerary.end_date).toLocaleDateString()}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
export default ItineraryColumn;
