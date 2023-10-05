import React from 'react';
import {
  Container, Row, Col, Card, Button,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import cutImages from '../assets/gallery/cuts/index.js';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="bg-light text-center py-5">
      <Container fluid className="w-100">
        <Row>
          <Col xs={12}>
            <h2 className="mb-4 about-h">{t('services.heading')}</h2>
            <p className="mb-5 about-paragraph">{t('services.description')}</p>
          </Col>
        </Row>
        <Row>
          {cutImages.map(({ image, id }) => (
            <Col key={id} xs={12} md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={image} className="h-75" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-start about-h">{t(`services.names.${id}`)}</Card.Title>
                  <Button variant="outline-dark" className="mt-auto register">{t('services.chooseService')}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
