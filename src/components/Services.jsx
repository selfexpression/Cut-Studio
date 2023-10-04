import React from 'react';
import {
  Container, Row, Col, Card, Button,
} from 'react-bootstrap';
import haircutImage from '../assets/gallery/cut1.jpg';
import beardTrimImage from '../assets/gallery/cut2.jpg';
import headShaveImage from '../assets/gallery/cut3.jpg';
import barberSpaImage from '../assets/gallery/cut4.jpg';
import royalShaveImage from '../assets/gallery/cut5.jpg';
import kidsHaircutImage from '../assets/gallery/cut6.jpg';

const servicesData = [
  { title: 'Стрижка мужская', image: haircutImage, id: 1 },
  { title: 'Стрижка усов и бороды', image: beardTrimImage, id: 2 },
  { title: 'Бритьё головы и бороды', image: headShaveImage, id: 3 },
  { title: 'Barber-SPA', image: barberSpaImage, id: 4 },
  { title: 'Королевское бритьё', image: royalShaveImage, id: 5 },
  { title: 'Стрижка детская', image: kidsHaircutImage, id: 6 },
];

const Services = () => (
  <section id="services" className="bg-light text-center py-5">
    <Container>
      <Row>
        <Col xs={12}>
          <h2 className="mb-4">Наши услуги</h2>
          <p className="lead mb-5">
            Наши кресла — это трон стиля, а атмосфера — это вихрь творчества.
            В «MOB CUT STUDIO» мы не просто следуем за трендами, мы их задаем.
            Наши профессиональные стилисты обладают не только мастерством,
            но и творческим видением, создавая образы,
            которые выходят за грани обыденности.
          </p>
        </Col>
      </Row>
      <Row>
        {servicesData.map((service) => (
          <Col key={service.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={service.image} className="h-75" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-start">{service.title}</Card.Title>
                <Button variant="outline-dark" className="mt-auto">Выбрать услугу</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Services;
