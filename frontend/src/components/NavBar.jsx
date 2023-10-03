import React from 'react';
import {
  Navbar, Container, Nav, Image, Offcanvas,
} from 'react-bootstrap';
import { useMediaQuery } from '@reactuses/core';
import { Link, animateScroll as scroll } from 'react-scroll';
import icon from '../assets/mobicon.webp';

const NavBar = () => {
  const isWide = useMediaQuery('(min-width: 768px)');
  const fontColorClass = !isWide ? 'offcanvas-color' : '';

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar expand={isWide} bg="light" sticky="top">
      <Container fluid>
        <Navbar.Brand onClick={scrollToTop}>
          <Image src={icon} alt="Barbershop Logo" style={{ maxHeight: '30px', width: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${isWide}`} />
        <Navbar.Offcanvas
          aria-labelledby={`offcanvasNavbarLabel-expand-${isWide}`}
          placement="end"
          className="custom-offcanvas w-100"
        >
          <Offcanvas.Header closeButton className="custom-offcanvas-header">
            <Offcanvas.Title onClick={scrollToTop}>
              <Image src={icon} alt="Barbershop Logo" style={{ maxHeight: '30px', width: 'auto' }} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={!isWide ? 'custom-offcanvas-body' : ''}>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link as={Link} to="about" className={fontColorClass} duration={500}>О нас</Nav.Link>
              <Nav.Link as={Link} to="services" className={fontColorClass} duration={500}>Услуги</Nav.Link>
              <Nav.Link href="#reviews" className={fontColorClass}>Отзывы</Nav.Link>
              <Nav.Link href="#barbers" className={fontColorClass}>Барберы</Nav.Link>
              <Nav.Link href="#contacts" className={fontColorClass}>Контакты</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
