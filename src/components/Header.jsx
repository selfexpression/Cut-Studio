import React from 'react';
import {
  Row, Col, Button,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@reactuses/core';
import { ParallaxBanner } from 'react-scroll-parallax';
import background from '../assets/background-header.png';
import '../styles.css';

const Header = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 840px)');
  const contentPosition = isWide
    ? 'align-items-center justify-content-start'
    : 'align-items-end justify-content-center';

  return (
    <section id="/" className="bg-light">
      <ParallaxBanner
        layers={[{ image: background, speed: -50 }]}
        className={`aspect-[2/1] header-container p-0 d-flex ${contentPosition}`}
      >
        <Row className="text-center m-5 text-header">
          <Col className="m-0 text-center">
            <p className="description m-0 p-0">{t('header.description1')}</p>
            <p className="description">{t('header.description2')}</p>
            <Button
              variant="outline-light"
              size="sm"
              className="btn-online-booking mb-5 rounded-0 w-50"
            >
              <span className="register">{t('header.onlineBooking')}</span>
            </Button>
          </Col>
        </Row>
      </ParallaxBanner>
    </section>
  );
};

export default Header;
