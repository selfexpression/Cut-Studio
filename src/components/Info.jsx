import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import {
  Telegram, Whatsapp, Telephone, GeoAltFill,
} from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/index.js';

const InfoSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleWidgetShow = () => {
    dispatch(actions.widgetShow());
  };

  return (
    <section id="contacts" className="bg-dark p-0 m-0">
      <Container fluid>
        <Row className="d-flex">
          <Col md={6} className="text-center text-md-start align-self-end mb-3">
            <h2 className="contacts-h m-3">{t('contacts.ourContacts')}</h2>
            <p className="m-3 contacts">
              <Whatsapp className="me-2" />
              <Telegram className="me-2" />
              <Telephone className="me-2" />
              <Button variant="outline-light" size="sm" className="rounded-5 m-2">
                <a href="tel:+79692281139">{t('navbar.phoneNumber')}</a>
              </Button>
            </p>
            <p className="m-3 contacts">
              <GeoAltFill className="me-2" />
              {t('navbar.location')}
            </p>
            <Button
              variant="outline-light"
              size="sm"
              className="rounded-5 m-2"
              onClick={handleWidgetShow}
            >
              <span className="register">{t('navbar.onlineBooking')}</span>
            </Button>
          </Col>
          <Col md={6} className="ms-auto p-0 m-0">
            <h2 className="contacts-h m-5 text-center">{t('contacts.findUsOnMap')}</h2>
            <div id="map" className="map" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InfoSection;
