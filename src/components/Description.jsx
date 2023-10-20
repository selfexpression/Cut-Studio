import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import { useMediaQuery } from '@reactuses/core';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { ParallaxBanner } from 'react-scroll-parallax';
import '../styles.css';
import imageWide from '../assets/descripPage-back.webp';
import imageMobile from '../assets/descripPage-back-m.jpg';

const Description = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 860px)');
  const classes = cn('text-center', 'p-0 m-0', {
    'w-50 mx-auto': isWide,
    'w-100': !isWide,
  });

  const image = isWide ? imageWide : imageMobile;
  const speed = isWide ? -15 : 0;

  return (
    <section className="bg-light">
      <Container fluid className="p-0 m-0">
        <Row className={classes}>
          <Col className="d-flex flex-column m-5">
            <p className="text-content p-0 m-0">{t('description.paragraph1')}</p>
            <p className="text-content p-0 m-0">{t('description.paragraph2')}</p>
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
