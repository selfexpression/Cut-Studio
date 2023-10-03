import React from 'react';
import {
  Container, Row, Col, Carousel, Image,
} from 'react-bootstrap';
import { useMediaQuery } from '@reactuses/core';
import cn from 'classnames';
import '../styles.css';
import carousel1 from '../gallery/carousel1.jpg';
import carousel2 from '../gallery/carousel2.jpg';
import carousel3 from '../gallery/carousel3.jpg';

const About = () => {
  const isWide = useMediaQuery('(min-width: 768px)');
  const classes = cn('text-center', {
    'w-50 mx-auto': isWide,
    'w-100': !isWide,
  });

  return (
    <section id="about">
      <Container fluid className="about-container">
        <Row className={classes}>
          <Col className="d-flex flex-column align-items-center m-5">
            <p className="about-paragraph p-0 m-0">
              Опытные мастера, индивидуальный подход и
              безупречный сервис создают неповторимую атмосферу,
              где каждый клиент — настоящий VIP.
            </p>
            <p className="about-paragraph">
              Превратите свой уход в приключение стиля с «MOB CUT STUDIO».
            </p>
            {/* <p className="about-paragraph">
            «MOB CUT STUDIO» – это не просто салон, это путеводитель
            по миру мужской элегантности и стиля.
            Доверьте свой облик профессионалам,
            и ваши волосы станут не просто стрижкой, а искусством,
            которое говорит о вашей неповторимой индивидуальности.
            Добро пожаловать в мир стиля,
            – где каждая стрижка — это история вашего собственного успеха.
          </p> */}
          </Col>
        </Row>
        <Row>
          <Col className="w-100 p-0 m-0">
            <Carousel>
              <Carousel.Item>
                <Image
                  alt="First slide"
                  src={carousel1}
                  className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  alt="Second slide"
                  src={carousel2}
                  className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  alt="Third slide"
                  src={carousel3}
                  className="d-block w-100"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
