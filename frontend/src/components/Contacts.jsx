import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import {
  Youtube, Telegram, Whatsapp, Telephone, GeoAltFill,
} from 'react-bootstrap-icons';

const Contacts = () => (
  <>
    <section id="contacts" className="bg-light">
      <Container fluid className="p-0">
        <Row className="bg-light text-center py-5">
          <Col>
            <h2>Наши видео</h2>
            <Button variant="primary" size="lg" onClick={() => window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID')}>
              <Youtube className="me-2" />
              Посмотреть видео
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="contacts" className="bg-light">
      <Container fluid className="p-0">
        <Row className="py-5">
          <Col md={6} className="text-center text-md-start">
            <h2>Наши контакты</h2>
            <p>Свяжитесь с нами:</p>
            <p>
              <Whatsapp className="me-2" />
              <Telegram className="me-2" />
              <Telephone className="me-2" />
              <a href="tel:+79692281139">+7-(969)-228-1139</a>
            </p>
            <p>
              <GeoAltFill className="me-2" />
              Новосибирск, ул. Октябрьская 81
            </p>
          </Col>
          <Col md={6}>
            {/* Вставьте свой API-ключ от 2ГИС */}
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
