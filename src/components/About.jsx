import React from 'react';
import {
  Container, Row, Col, Carousel, Image,
} from 'react-bootstrap';
import { useMediaQuery } from '@reactuses/core';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import '../styles.css';
import carouselImages from '../assets/gallery/carousels/index.js';

const About = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 768px)');
  const classes = cn('text-center', 'p-0 m-0', {
    'w-50 mx-auto': isWide,
    'w-100': !isWide,
  });

  return (
    <section id="about" className="bg-light">
      <Container fluid>
        <Row className={classes}>
          <Col className="d-flex flex-column m-5">
            <p className="about-paragraph p-0 m-0">{t('about.paragraph1')}</p>
            <p className="about-paragraph p-0 m-0">{t('about.paragraph2')}</p>
          </Col>
        </Row>
        <Row>
          <Col className="w-100 p-0 m-0">
            <Carousel>
              {carouselImages.map(({ image, id }) => (
                <Carousel.Item key={id}>
                  <Image
                    alt="First slide"
                    src={image}
                    className="d-block w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
