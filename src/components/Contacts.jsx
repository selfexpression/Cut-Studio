import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import {
  Youtube, Telegram, Whatsapp, Telephone, GeoAltFill,
} from 'react-bootstrap-icons';

const Contacts = () => (
  <>
    <section id="contacts" className="bg-light p-0 m-0">
      <Container fluid className="p-0">
        <Row className="bg-light text-center py-5 w-100">
          <Col className="p-0">
            <h2 className="about-h">Видео с нашей работой</h2>
            <Button variant="outline-dark" size="sm" onClick={() => window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID')}>
              <Youtube className="me-2 register" />
              Посмотреть
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="contacts" className="bg-dark p-0 m-0">
      <Container fluid>
        <Row className="d-flex">
          <Col md={6} className="text-center text-md-start align-self-end mb-3">
            <h2 className="contacts-h m-3">Наши контакты</h2>
            <p className="m-3 contacts">
              <Whatsapp className="me-2" />
              <Telegram className="me-2" />
              <Telephone className="me-2" />
              <Button variant="outline-info" size="sm" className="rounded-5 m-2">
                <a href="tel:+79692281139">+7-(969)-228-1139</a>
              </Button>
            </p>
            <p className="m-3 contacts">
              <GeoAltFill className="me-2" />
              Новосибирск, ул. Октябрьская 81
            </p>
            <Button variant="outline-info" size="sm" className="rounded-5 m-2">
              <span className="register">Записаться</span>
            </Button>
          </Col>
          <Col md={6} className="ms-auto p-0 m-0">
            <h2 className="contacts-h m-5 text-center">Найти нас на карте</h2>
            <div id="map" className="map" />
          </Col>
        </Row>
      </Container>
    </section>

  </>
);

export default Contacts;
