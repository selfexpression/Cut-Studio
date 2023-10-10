import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import { useMediaQuery } from '@reactuses/core';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { ParallaxBanner } from 'react-scroll-parallax';
import '../styles.css';
import image from '../assets/back-i.webp';

const Description = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 860px)');
  const classes = cn('text-center', 'p-0 m-0', {
    'w-50 mx-auto': isWide,
    'w-100': !isWide,
  });

  const speed = isWide ? -15 : -10;

  return (
    <section className="bg-light">
      <Container fluid className="p-0 m-0">
        <Row className={classes}>
          <Col className="d-flex flex-column m-5">
            <p className="about-paragraph p-0 m-0">{t('description.paragraph1')}</p>
            <p className="about-paragraph p-0 m-0">{t('description.paragraph2')}</p>
          </Col>
        </Row>
        <ParallaxBanner
          layers={[
            {
              image,
              speed,
              expanded: false,
            },
          ]}
          className="parallax-mirror"
        />
      </Container>
    </section>
  );
};

export default Description;
