import React from 'react';
import {
  Container, Card, Button, Row, Col,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useMediaQuery } from '@reactuses/core';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/index.js';
import cutImages from '../assets/gallery/services/index.js';

const Services = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isWide = useMediaQuery('(min-width: 860px)');
  const classes = cn('text-center', 'p-0 m-0', {
    'w-50 mx-auto': isWide,
    'w-100': !isWide,
  });

  const handleWidgetShow = () => {
    dispatch(actions.bookingShow());
  };

  return (
    <section id="services" className="bg-light text-center py-5">
      <Row className={classes}>
        <Col xs={12} className="d-flex flex-column">
          <h2 className="mb-4 text-header">{t('services.heading')}</h2>
          <p className="mb-5 text-content">{t('services.description')}</p>
        </Col>
      </Row>
      <Container fluid className="d-flex services-flow">
        {cutImages.map(({ image, id }) => (
          <Card key={id} className="mx-2 services-card">
            <Card.Img variant="top" src={image} className="h-75" />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-start">{t(`services.names.${id}`)}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <div className="w-100 services-btn">
        <Button
          variant="outline-dark"
          className="mt-auto register services-register"
          onClick={handleWidgetShow}
        >
          {t('services.chooseService')}
        </Button>
      </div>
    </section>
  );
};

export default Services;
