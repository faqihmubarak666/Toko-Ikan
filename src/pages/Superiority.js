import React, { Component } from "react";
import "../style/Superiority.css";
import { Card, Row, Col, Image } from "react-bootstrap";
import box from "../images/box.png";
import checklist from "../images/checklist.png";
import finger from "../images/finger.png";
import phone2 from "../images/phone2.png";
import fish2 from "../images/fish2.png";
import phone3 from "../images/phone3.png";
import fish3 from "../images/fish3.png";
import phone4 from "../images/phone4.png";
import fish4 from "../images/fish4.png";

export default class Superiority extends Component {
  render() {
    return (
      <div className="container-superiority">
        <h1 className="tittle-superiority">Keunggulan kami</h1>
        <p className="description-superiority">
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text
          <br />
          ever since the 1500s.
        </p>
        <Row className="container-card">
          <Col>
            <Card style={{ width: "18rem" }} className="card text-center">
              <Card.Body>
                <Image src={box} alt="logo" />
                <Card.Title>Kirim Ke Berbagai Negara</Card.Title>
                <Card.Text className="description-card">
                  A Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="card text-center">
              <Card.Body>
                <Image src={finger} alt="logo" />
                <Card.Title>Mudah Di Gunakan</Card.Title>
                <Card.Text className="description-card">
                  A Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="card text-center">
              <Card.Body>
                <Image src={checklist} alt="logo" />
                <Card.Title>Pengiriman Aman</Card.Title>
                <Card.Text className="description-card">
                  A Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="row-fitur">
          <Col className="col-fitur1">
            <h1 className="title-fitur">Berbagai Metode Pengiriman</h1>
            <p className="description-fitur">
              A Lorem Ipsum is simply dummy text of the printing
              <br />
              and typesetting industry. Lorem Ipsum has been the
              <br />
              industry's standard.
            </p>
          </Col>
          <Col className="col-fitur2">
            <Image className="phone-image" src={phone2} alt="phone" />
            <Image className="fish2" src={fish2} alt="fish" />
          </Col>
        </Row>

        <Row className="row-fitur2">
          <Col className="col-fitur3">
            <Image className="phone-image3" src={phone3} alt="phone" />
            <Image className="fish3" src={fish3} alt="fish" />
          </Col>
          <Col className="col-fitur4">
            <h1 className="title-fitur2">Lacak status pengiriman anda</h1>
            <p className="description-fitur2">
              A Lorem Ipsum is simply dummy text of the printing and
              <br />
              typesetting industry. Lorem Ipsum has been the industry's
              <br /> standard dummy text ever since the 1500s, when an unknown.
              <br /> A Lorem Ipsum is simply dummy text of the printing and
              <br />
              typesetting industry.
            </p>
          </Col>
        </Row>

        <Row className="row-fitur">
          <Col className="col-fitur1">
            <h1 className="title-fitur">
              Cek schedule
              <br />
              pengiriman anda
            </h1>
            <p className="description-fitur">
              A Lorem Ipsum is simply dummy text of the printing
              <br />
              and typesetting industry. Lorem Ipsum has been the
              <br />
              industry's standard.
            </p>
          </Col>
          <Col className="col-fitur2">
            <Image className="phone-image4" src={phone4} alt="phone" />
            <Image className="fish4" src={fish4} alt="fish" />
          </Col>
        </Row>
      </div>
    );
  }
}
