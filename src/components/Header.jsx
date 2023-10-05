import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@reactuses/core';
import '../styles.css';
// import logo from '../assets/sticker.webp';

const Header = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 840px)');
  const align = isWide ? 'align-items-center' : 'align-items-end';

  return (
    <section id="/" className="bg-light">
      <Container
        fluid
        className={`${align} header-container w-100 p-0 d-flex justify-content-start m-0 p-0`}
      >
        <Row className="text-center m-5">
          <Col className="m-0">
            <p className="description m-0 p-0">{t('header.description1')}</p>
            <p className="description">{t('header.description2')}</p>
            <Button variant="outline-light" size="sm" className="btn-online-booking mb-5 rounded-0 w-50">
              <span className="register">{t('header.onlineBooking')}</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
