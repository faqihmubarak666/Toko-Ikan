import React, { Component } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import logoGoogleApp from "../images/google-app.png";
import phone1 from "../images/phone1.png";
import fish1 from "../images/fish1.png";
import "../style/Advertisement.css";

export default class Advertisement extends Component {
  render() {
    return (
      <>
        <Row className="container-add">
          <Col className="col-one-add">
            <h1 className="title-add">Kirim berbagi jenis ikan dengan mudah</h1>
            <p className="description-add">
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <Image
              className="logo-google float-star"
              src={logoGoogleApp}
              alt="google-play"
            />
            <Row className="row-active-users">
              <Col>
                <p className="number">1.9k+</p>
                <p className="text">Active Users</p>
              </Col>
              <Col>
                <p className="number">20+</p>
                <p className="text">New Features</p>
              </Col>
            </Row>
          </Col>

          <Col className="col-two">
            <Image
              className="phone-image-add mx-auto d-block"
              src={phone1}
              alt="phone"
            />
            <Image className="fish1" src={fish1} alt="fish" />
          </Col>
        </Row>

        <Row>
          <Col className="col-check text-center">
            <h3 className="title-tracking">Lacak Pengiriman anda</h3>
            <p className="descrption-tracking">
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>

            <Row style={{ margin: "auto" }}>
              <Col>
                <Form.Control type="text" placeholder="Lacak Pengiriman" />
              </Col>
              <Col xs lg="2">
                <Button
                  className="btn-tracking"
                  style={{ backgroundColor: "#F2572E", borderColor: "#F2572E" }}
                >
                  Lacak
                </Button>
              </Col>
            </Row>
          </Col>
          <Col className="col-check text-center">
            <h3 className="title-check">Cek Tarif Pengirman Anda</h3>
            <Row className="form-rates">
              <Col>
                <Form.Control type="text" placeholder="Origin" />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Destination" />
              </Col>
            </Row>
            <div className="d-grid gap-2">
              <Button
                className="btn-checking"
                style={{
                  backgroundColor: "#F2572E",
                  borderColor: "#F2572E",
                }}
              >
                Check
              </Button>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
