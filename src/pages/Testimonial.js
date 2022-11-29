import React, { Component } from "react";
import "../style/Testimonial.css";
import { Row, Col, Image } from "react-bootstrap";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import googleApp from "../images/google-app.png";
import courier from "../images/courier.png";

export default class Testimonial extends Component {
  render() {
    return (
      <>
        <h1 className="title-testimoni">Testimonial</h1>
        <p className="description-testimoni">
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <Row className="box-card">
          <Col>
            <Image src={card1} alt="card" className="card-testimoni" />
          </Col>
          <Col>
            <Image src={card2} alt="card" className="card-testimoni" />
          </Col>
          <Col>
            <Image src={card3} alt="card" className="card-testimoni" />
          </Col>
          <Col>
            <Image src={card4} alt="card" className="card-testimoni" />
          </Col>
        </Row>

        <Row className="row-download">
          <Col>
            <h1 className="title-download">
              Available and
              <br />
              Download Anytime!
            </h1>
            <p className="description-download">
              A Lorem Ipsum is simply dummy text of the printing and
            </p>
            <Image src={googleApp} alt="google-app" className="google-app" />
          </Col>
          <Col>
            <Image src={courier} alt="courier" className="img-courier" />
          </Col>
        </Row>
      </>
    );
  }
}
