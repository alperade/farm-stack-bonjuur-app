import SearchTabs from "./Features/Misc/tabs";
import ItineraryList from "./Features/Itineraries/Itinerary";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import MemberForm from "./MemberForm";
import PickMembership from "./Step1Membership";


function Main() {
  return (
    <Container>
      <Row>
        <Col sm={5}>
          <div className="section-border">
            <MemberForm/>
          </div>
        </Col>
        <Col sm={5}>
          <div className="section-border">
            <PickMembership/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
