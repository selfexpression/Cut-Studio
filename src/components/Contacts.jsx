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
          <Col md={6} className="text-center text-md-start align-self-end">
            <h2 className="contacts-h m-3">Наши контакты</h2>
            <p className="m-3 contacts">
              <Whatsapp className="me-2" />
              <Telegram className="me-2" />
              <Telephone className="me-2" />
              <a href="tel:+79692281139">+7-(969)-228-1139</a>
            </p>
            <p className="m-3 contacts">
              <GeoAltFill className="me-2" />
              Новосибирск, ул. Октябрьская 81
            </p>
          </Col>
          <Col md={6} className="ms-auto p-0 m-0">
            {/* Вставьте свой API-ключ от 2ГИС */}
            <h2 className="contacts-h m-5 text-center">Найти нас на карте</h2>
            <div style={{ width: '100%', height: '400px' }}>
              <iframe
                title="map"
                width="100%"
                height="100%"
                src={'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3AYOUR_MAP_ID&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true'}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  </>
);

export default Contacts;
