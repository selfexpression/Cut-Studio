import React from 'react';
import {
  Navbar, Container, Nav, Image, Offcanvas,
} from 'react-bootstrap';
import { useMediaQuery } from '@reactuses/core';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  Instagram, Telegram, Whatsapp, Telephone, GeoAltFill,
} from 'react-bootstrap-icons';
import icon from '../assets/mobicon.webp';

const NavBar = () => {
  const isWide = useMediaQuery('(min-width: 840px)');

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
          placement="top"
          className="w-100 h-75"
        >
          <Offcanvas.Header closeButton className="custom-offcanvas-header">
            <Offcanvas.Title onClick={scrollToTop}>
              <Image src={icon} alt="Barbershop Logo" style={{ maxHeight: '30px', width: 'auto' }} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={`d-flex flex-column ${!isWide ? 'custom-offcanvas-body' : ''}`}>
            {isWide
              ? (
                <>
                  <Nav className="ms-auto m-0 p-0">
                    <Nav.Link as={Link} to="about" duration={500}>О нас</Nav.Link>
                    <Nav.Link as={Link} to="services" duration={500}>Услуги</Nav.Link>
                    <Nav.Link href="#reviews">Отзывы</Nav.Link>
                    <Nav.Link href="#barbers">Барберы</Nav.Link>
                    <Nav.Link href="#contacts">Контакты</Nav.Link>
                  </Nav>
                  <Nav className="ms-auto d-flex align-items-end m-0 p-0">
                    <Nav.Link className="m-0">
                      <Instagram />
                    </Nav.Link>
                    <Nav.Link className="m-0">
                      <Telegram />
                    </Nav.Link>
                    <Nav.Link className="m-0">
                      <Whatsapp />
                    </Nav.Link>
                    <Nav.Link className="m-0">ул. Октябрьская 81</Nav.Link>
                    <Nav.Link className="m-0">
                      <GeoAltFill />
                      {' '}
                      Новосибирск
                    </Nav.Link>
                    <Nav.Link className="m-0">
                      <Telephone />
                      {' '}
                      +7-(969)-228-1139
                    </Nav.Link>
                  </Nav>
                </>
              )
              : (
                <>
                  <Nav.Link as={Link} to="about" duration={500}>О нас</Nav.Link>
                  <Nav.Link as={Link} to="services" duration={500}>Услуги</Nav.Link>
                  <Nav.Link href="#reviews">Отзывы</Nav.Link>
                  <Nav.Link href="#barbers">Барберы</Nav.Link>
                  <Nav.Link href="#contacts">Контакты</Nav.Link>
                  <div className="mt-auto">
                    <div className="m-1">
                      <Instagram className="m-1" />
                      <Telegram className="m-1" />
                      <Whatsapp className="m-1" />
                    </div>
                    <div className="m-1">
                      <div className="m-1">
                        <GeoAltFill />
                        {' '}
                        Новосибирск
                      </div>
                      <div className="m-1">ул. Октябрьская 81</div>
                      <div className="m-1">
                        <Telephone />
                        {' '}
                        +7-(969)-228-1139
                      </div>
                    </div>
                  </div>
                </>
              )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
