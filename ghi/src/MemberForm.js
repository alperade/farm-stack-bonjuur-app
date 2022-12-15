import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useGetTokenQuery } from "./app/accountApi";
import { preventDefault } from "./app/utils";
import { useAddMemberMutation } from "./app/memberApi";

const MemberForm = () => {
  const [addMember, { data }] = useAddMemberMutation();
  const { data: tokenData } = useGetTokenQuery();
  const accountId = tokenData && tokenData.account && tokenData.account.id;
  // this is a temporary placeholder for either a
  // redirect using useNavigate or a better looking success alert.
  if (data) {
    return (
      <div>
        <Alert key="success" variant="success">
          You have successfully created a new membership.
        </Alert>
      </div>
    );
  }


  return (
    <div>
      <Form
        className="register-form"
        method="post"
        onSubmit={preventDefault(addMember, (e) => e.target)}
      >
        <Container>
          <Row className="item-border">
            <Card
              className="item-border"
              border="light"
              style={{ width: "40rem" }}
            >
              <Card.Title className="centered">
                Subscribe to Bonjuur
              </Card.Title>
                <Card.Body>
                  <Row>
                    <Col>
                      <Form.Label>Membership</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control
                        type="text"
                        name="membership"
                        placeholder="Keeping+"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Bedrooms</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control name="bedrooms" type="number" placeholder="bedrooms" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Bathrooms</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control name="bathrooms" type="number" placeholder="bathrooms" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Email</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control name="email" type="text" placeholder="email" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Phone</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control name="phone" type="text" placeholder="phone" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Address</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control name="address" type="text" placeholder="address" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Start Date</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control name="start_date" type="date" placeholder="start date" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Time Slot</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control name="time_slot" type="text" placeholder="time slot" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Cleaner</Form.Label>
                    </Col>
                    <Col className="mb-3" sm={8}>
                      <Form.Control name="cleaner" type="text" placeholder="cleaner" />
                    </Col>
                  </Row>
                  <Button variant="success" type="submit">
                  Subscribe
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default MemberForm;
