import React from 'react';
import {
  Navbar, Container, Nav, Image, Offcanvas,
} from 'react-bootstrap';
import { useMediaQuery } from '@reactuses/core';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useLocation, Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Telegram, Whatsapp, Telephone, GeoAltFill,
} from 'react-bootstrap-icons';
import logo from '../assets/sticker.webp';

const OffcanvasBody = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 860px)');

  return (
    <Offcanvas.Body className={`d-flex flex-column ${!isWide ? 'custom-offcanvas-body' : ''}`}>
      {isWide
        ? (
          <Nav className="m-0 p-0 d-flex justify-content-center">
            <Nav.Link as={ScrollLink} to="/gallery" duration={500}>{t('navbar.gallery')}</Nav.Link>
            <Nav.Link as={ScrollLink} to="/services" duration={500}>{t('navbar.services')}</Nav.Link>
            <Nav.Link as={RouterLink} to="/team">{t('navbar.team')}</Nav.Link>
            <Nav.Link as={ScrollLink} to="/contacts" duration={500}>{t('navbar.contacts')}</Nav.Link>
          </Nav>
        )
        : (
          <>
            <Nav.Link as={ScrollLink} to="/gallery" duration={500} className="m-1">{t('navbar.gallery')}</Nav.Link>
            <Nav.Link as={ScrollLink} to="/services" duration={500} className="m-1">{t('navbar.services')}</Nav.Link>
            <Nav.Link as={RouterLink} to="/team" className="m-1">{t('navbar.team')}</Nav.Link>
            <Nav.Link as={ScrollLink} to="/contacts" className="m-1">{t('navbar.contacts')}</Nav.Link>
            <div className="mt-auto">
              <div className="m-1">
                <div className="m-1">
                  <GeoAltFill />
                  {' '}
                  {t('navbar.city')}
                </div>
                <div className="m-1">{t('navbar.location')}</div>
                <div className="m-1">
                  <Telephone />
                  {' '}
                  <a href="tel:+79692281139">{t('navbar.phoneNumber')}</a>
                </div>
              </div>
              <div className="m-1">
                <Telegram className="m-2" />
                {t('navbar.telegram')}
                <Whatsapp className="m-2" />
                {t('navbar.whatsapp')}
              </div>
            </div>
          </>
        )}
    </Offcanvas.Body>
  );
};

const NavBar = () => {
  const isWide = useMediaQuery('(min-width: 840px)');
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const navigate = useNavigate();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar expand={isWide} bg="light" sticky="top">
      <Container fluid>
        <Navbar.Brand onClick={isMainPage ? scrollToTop : () => navigate('/')}>
          <Image src={logo} alt="Barbershop Logo" className="nav-logo" />
        </Navbar.Brand>
        {isMainPage
          ? (
            <>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${isWide}`} />
              <Navbar.Offcanvas
                aria-labelledby={`offcanvasNavbarLabel-expand-${isWide}`}
                placement="top"
                className="w-100 h-75"
              >
                <Offcanvas.Header closeButton className="custom-offcanvas-header">
                  <Offcanvas.Title onClick={scrollToTop}>
                    <Image src={logo} alt="Barbershop Logo" className="nav-logo" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <OffcanvasBody />
              </Navbar.Offcanvas>
            </>
          )
          : (
            null
          )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
