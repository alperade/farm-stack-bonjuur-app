import SearchTabs from "./Features/Misc/tabs";
import ItineraryList from "./Features/Itineraries/Itinerary";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SearchBar from "./Features/Misc/SearchBar";
import Welcome from "./Features/Misc/Welcome";

function Main() {
  return (
    <Container>
      <Row>
        <Welcome/>
      </Row>
      <Row>
        <Col sm={8}>
          <SearchBar />
          <div className="section-border">
            <SearchTabs />
          </div>
        </Col>
        <Col sm={4}>
          <div className="section-border">
            <ItineraryList />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
