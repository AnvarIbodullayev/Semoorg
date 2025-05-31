import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import leftImage from "../../assets/backgrounds/0.png";
import MyButton from "../MyButton/MyButton";

const StyledForms = styled.section`
  background: #f9f6f1;
  padding: 8rem 0;
  .formInner {
    width: 100%;
    height: 70vh;
    border: 1px solid #AF8F5C;
    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }
  .right {
    padding: 2rem;
  }
`;

function Forms() {
  return (
    <StyledForms className="Forms">
      <div className="container">
        <div className="row">
          {/* left */}
          <div className="col-lg-6 col-sm-12 d-flex alig-items-center">
            <div className="formInner">
              <img src={leftImage} alt="image user" />
            </div>
          </div>
          {/* right */}
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-itens-center">
            <div className="formInner right">
              <h1 className="fw-bold">Contact us</h1>
              <Form.Group className="mb-3 mt-4" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="First Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Last Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  className="py-2"
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message *</Form.Label>
                <Form.Control
                  className="py-2"
                  as="textarea"
                  rows={6}
                  placeholder="Message"
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <MyButton
                  className="mt-2"
                  title={"CONTACT US"}
                  variant={"dark"}
                  rangi={"#AF8F5C"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledForms>
  );
}

export default Forms;
