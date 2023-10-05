import React from 'react';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import teammatePhotos from '../assets/gallery/teammates/index.js';

const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="bg-light text-center py-5">
      <Container className="mt-5">
        <Row>
          <Col xs={12}>
            <h2 className="text-center mb-4 about-h">{t('team.heading')}</h2>
            <p className="mb-5 about-paragraph">{t('team.description')}</p>
          </Col>
        </Row>
        <Row xs={2} md={2} lg={3} className="g-4">
          {teammatePhotos.map(({ photo, id }) => (
            <Col key={id}>
              <Card>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                  <Card.Title className="text-center about-h">{t(`team.teammates.${id}`)}</Card.Title>
                  <Card.Text className="team-description">{t(`team.teammatesDescription.${id}`)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
