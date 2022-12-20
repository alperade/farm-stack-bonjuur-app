import React from "react";
import { useSelector } from "react-redux";
import { useGetTokenQuery } from "./app/accountApi";
import { useAddMemberMutation } from "./app/memberApi";
import { preventDefault } from "./app/utils";
import { Button, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export function Review() {
    const navigate = useNavigate()
    const [addMember, { data }] = useAddMemberMutation();
    const results = useSelector((state) => state.member)
    const { data: tokenData } = useGetTokenQuery();
    const account = tokenData.account
    if (data) {
        navigate('/details')
    }



    return (
      <>
        <div className="col-4 mx-auto">
          <table className="table bg-transparent">
            <tbody>
              <tr>
                <td>Email</td>
                <td>{account.email}</td>
              </tr>
              <tr>
                <td>Membership</td>
                <td>{results.membership}</td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td>{results.start_date}</td>
              </tr>
              <tr>
                <td>Time Slot</td>
                <td>{results.time_slot}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{results.address}</td>
              </tr>
              <tr>
                <td>Apt Number</td>
                <td>{results.apt}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{results.phone}</td>
              </tr>
              <tr>
                <td>Bedroom</td>
                <td>{results.bedrooms}</td>
              </tr>
              <tr>
                <td>Bathrooms</td>
                <td>{results.bathrooms}</td>
              </tr>
              <tr>
                <td>Pets</td>
                <td>{results.pets}</td>
              </tr>
            </tbody>
          </table>
          <Form
            className="register-form"
            method="post"
            onSubmit={preventDefault(addMember, (e) => e.target)}
          >
            <Container>
              <Row>
                  <Button variant="success" type="submit">
                  Continue to Payment
                </Button>
                    <input
                      name="email"
                      as="textarea"
                      value={account.email ? account.email : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="full_name"
                      as="textarea"
                      value={account.full_name ? account.full_name : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="membership"
                      as="textarea"
                      value={results.membership ? results.membership : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="start_date"
                      as="datetime"
                      value={results.start_date ? results.start_date : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="bathrooms"
                      as="textarea"
                      value={results.bathrooms ? results.bathrooms : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="bedrooms"
                      as="textarea"
                      value={results.bedrooms ? results.bedrooms : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="address"
                      as="textarea"
                      value={results.address ? results.address : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="apt"
                      as="textarea"
                      value={results.apt ? results.apt : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="phone"
                      as="textarea"
                      value={
                        results.phone ? results.phone : ""
                      }
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="pets"
                      as="textarea"
                      value={results.pets ? results.pets : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="time_slot"
                      as="textarea"
                      value={results.time_slot ? results.time_slot : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="email"
                      as="textarea"
                      value={account.email ? account.email : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
                    <input
                      name="humans"
                      as="textarea"
                      value={results.humans ? results.humans : ""}
                      style={{ display: "none" }}
                      readOnly
                    ></input>
              </Row>
            </Container>
          </Form>
    </div>
    </>


)}

export default Review;
