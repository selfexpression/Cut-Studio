import React from 'react';
import {
  Container, Row, Col, Button, Image,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../styles.css';
import logo from '../assets/sticker.webp';

const Header = () => {
  const { t } = useTranslation();

  return (
    <section id="/" className="bg-light">
      <Container fluid className="header-container w-100 p-0 d-flex flex-column">
        <Row className="text-center m-0">
          <Col className="d-flex flex-column align-items-center w-100">
            <Container className="align-items-start">
              <Col className="d-flex flex-column align-items-center m-5">
                <Image src={logo} alt="Barbershop Logo" className="logo mt-5 p-2" />
                <p className="description m-0 p-0">{t('header.description1')}</p>
                <p className="description">{t('header.description2')}</p>
              </Col>
            </Container>
          </Col>
        </Row>
        <Container fluid className="d-flex justify-content-center align-items-start mt-auto">
          <Row className="text-center mb-5">
            <Col className="mb-5">
              <Button variant="outline-light" size="lg" className="btn-online-booking mb-5 rounded-0">
                <span className="register">{t('header.onlineBooking')}</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Header;
