import React, { Component } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../style/NavigationBar.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar variant="light">
        <Container>
          <Navbar.Brand
            className="title-bar"
            href="#"
            style={{ color: "#F2572E" }}
          >
            Toko Ikan
          </Navbar.Brand>
          <Nav className="nav-bar">
            <Nav.Link href="#beranda">Beranda</Nav.Link>
            <Nav.Link href="#keunggulan">Keunggulan</Nav.Link>
            <Nav.Link href="#fitur">Fitur Aplikasi</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
          </Nav>
          <Button variant="danger">Download</Button>
        </Container>
      </Navbar>
    );
  }
}
