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
                    <Nav.Link as={Link} to="team" duration={500}>Команда</Nav.Link>
                    <Nav.Link as={Link} to="contacts" duration={500}>Свяжитесь с нами</Nav.Link>
                  </Nav>
                  <Nav className="ms-auto m-0 p-0 d-flex align-items-center">
                    <Instagram className="m-1" />
                    <Telegram className="m-1" />
                    <Whatsapp className="m-1" />
                    <div className="m-1 nav-contacts">
                      <GeoAltFill />
                      {' '}
                      Новосибирск
                    </div>
                    <div className="m-1 nav-contacts">ул. Октябрьская 81</div>
                    <div className="m-1 nav-contacts">
                      <Telephone />
                      {' '}
                      <a href="tel:+79692281139">+7-(969)-228-1139</a>
                    </div>
                  </Nav>
                </>
              )
              : (
                <>
                  <Nav.Link as={Link} to="about" duration={500} className="m-1">О нас</Nav.Link>
                  <Nav.Link as={Link} to="services" duration={500} className="m-1">Услуги</Nav.Link>
                  <Nav.Link as={Link} to="team" duration={500} className="m-1">Команда</Nav.Link>
                  <Nav.Link as={Link} to="contacts" className="m-1">Свяжитесь с нами</Nav.Link>
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
                        <a href="tel:+79692281139">+7-(969)-228-1139</a>
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
