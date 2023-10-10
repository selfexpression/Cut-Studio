import React from 'react';
import {
  Container, Row, Col, Carousel, Image,
} from 'react-bootstrap';
import '../styles.css';
import carouselImages from '../assets/gallery/carousels/index.js';

const Gallery = () => (
  <section id="/gallery" className="bg-light">
    <Container fluid>
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

export default Gallery;
