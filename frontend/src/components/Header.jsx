import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import '../styles.css';
import icon from '../assets/sticker.webp';

const Header = () => (
  <Container fluid className="header-container w-100 p-0 d-flex flex-column">
    <Row className="text-center m-0">
      <Col className="d-flex flex-column align-items-center w-100">
        <div className="align-items-start">
          <img src={icon} alt="Barbershop Logo" className="logo mt-5 p-2" />
          <p className="description p-0 m-0">
            Место, где стиль встречает удобство.
          </p>
          <p className="description">
            Вдохновляйтесь атмосферой стиля и заботы о себе.
          </p>
        </div>
      </Col>
    </Row>
    <Container fluid className="d-flex justify-content-center align-items-start mt-auto">
      <Row className="text-center m-0">
        <Col className="mb-5">
          <Button variant="outline-light" size="lg" className="btn-online-booking mb-5 rounded-0">
            <span>Записаться онлайн</span>
          </Button>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Header;
