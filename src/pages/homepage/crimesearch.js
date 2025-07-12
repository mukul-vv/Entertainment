import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const CrimeSearch = () => {
  return (
    <div className="hero-section text-light" style={{ position: "relative" }}>
      <div className="hero-overlay">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <h1 className="display-4 fw-bold">
                Won Over <span className="text-warning">$83 Million</span> for Clients
              </h1>
              <p className="lead">
                <span className="text-warning">★★★★★</span> 5-Star Local Google Business (300+ Reviews)
              </p>
            </Col>
            <Col lg={6}>
              <div className="form-container bg-dark p-4 rounded">
                <h4 className="mb-4">Free Case Evaluation</h4>
                <Form>
                  <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="+1" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="caseDescription">
                    <Form.Label>Describe Your Case</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter case details" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>{`
        .hero-section {
          background: url('https://plus.unsplash.com/premium_photo-1673543763969-1d54002352d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-overlay {
          background: rgba(0, 0, 0, 0.6);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      `}</style>
    </div>
  );
}

export default CrimeSearch;
