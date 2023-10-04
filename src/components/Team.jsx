import React from 'react';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import employee1 from '../assets/gallery/employee1.jpg';
import employee2 from '../assets/gallery/employee2.jpg';
import employee3 from '../assets/gallery/employee3.jpg';
import employee4 from '../assets/gallery/employee4.jpg';
import employee5 from '../assets/gallery/employee5.jpg';
import employee6 from '../assets/gallery/employee6.jpg';

const Team = () => (
  <section id="team" className="bg-light text-center py-5">
    <Container className="mt-5">
      <Row>
        <Col xs={12}>
          <h2 className="text-center mb-4">Наша команда</h2>
          <p className="lead mb-5">
            «MOB CUT STUDIO» – это не просто салон, это путеводитель
            по миру мужской элегантности и стиля.
            Доверьте свой облик профессионалам,
            и ваши волосы станут не просто стрижкой, а искусством,
            которое говорит о вашей неповторимой индивидуальности.
            Добро пожаловать в мир стиля,
            – где каждая стрижка — это история вашего собственного успеха.
          </p>
        </Col>
      </Row>
      <Row xs={2} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={employee1} />
            <Card.Body>
              <Card.Title className="text-center">Имя Фамилия 1</Card.Title>
              <Card.Text>
                Здесь должно быть описание сотрудника 1.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={employee2} />
            <Card.Body>
              <Card.Title className="text-center">Имя Фамилия 2</Card.Title>
              <Card.Text>
                Здесь должно быть описание сотрудника 2.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={employee3} />
            <Card.Body>
              <Card.Title className="text-center">Имя Фамилия 3</Card.Title>
              <Card.Text>
                Здесь должно быть описание сотрудника 3.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={employee4} />
            <Card.Body>
              <Card.Title className="text-center">Имя Фамилия 4</Card.Title>
              <Card.Text>
                Здесь должно быть описание сотрудника 4.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={employee5} />
            <Card.Body>
              <Card.Title className="text-center">Имя Фамилия 5</Card.Title>
              <Card.Text>
                Здесь должно быть описание сотрудника 5.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={employee6} />
            <Card.Body>
              <Card.Title className="text-center">Имя Фамилия 6</Card.Title>
              <Card.Text>
                Здесь должно быть описание сотрудника 6.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Team;
