import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import jbgLogo from "../images/jbg-logo.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instragram from "../images/instragram.png";
import "../style/Footbar.css";

class Footbar extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="col-footbar1">
            <Image className="logo-jbg" src={jbgLogo} alt="logo jbg" />
            <p className="description-footbar">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              perspiciatis deleniti labore molestias? Necessitatibus voluptas
              vel repellat animi nostrum, eaque itaque minima velit veniam rerum
              ad inventore, reiciendis tempora laudantium.
            </p>
            <Row>
              <Col>
                <Image
                  className="logo-facebook"
                  src={facebook}
                  alt="facebook"
                />
              </Col>
              <Col>
                <Image className="logo-twitter" src={twitter} alt="twitter" />
              </Col>
              <Col>
                <Image
                  className="logo-instragram"
                  src={instragram}
                  alt="instragram"
                />
              </Col>
            </Row>
          </Col>
          <Col xs lg="2" className="col-footbar1">
            <h5 className="title-menu">Menu Bantuan</h5>
            <p className="name-menu">Keunggulan</p>
            <p className="name-menu">Fitur</p>
            <p className="name-menu">Testimoni</p>
          </Col>
          <Col className="col-footbar1">
            <h5 className="title-contact">Informasi kontak</h5>
            <p className="name-contact">0812-9797-1227</p>
            <p className="name-contact">0812-9797-1227</p>
            <p className="name-contact">Jbgtranshipping@gmail.com</p>
          </Col>
        </Row>
        <footer>All rights reserved@2022</footer>
      </div>
    );
  }
}

export default Footbar;
