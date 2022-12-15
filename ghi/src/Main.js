import SearchTabs from "./Features/Misc/tabs";
import ItineraryList from "./Features/Itineraries/Itinerary";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";


function Main() {
  return (
    <Container>
      <Row>
        <Col sm={5}>
          <div className="section-border">
            kolon 1
          </div>
        </Col>
        <Col sm={5}>
          <div className="section-border">
            kolon 2
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
