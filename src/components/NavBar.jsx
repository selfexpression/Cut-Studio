import React from 'react';
import {
  Navbar, Container, Nav, Image, Offcanvas,
} from 'react-bootstrap';
import { useMediaQuery } from '@reactuses/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useLocation, Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Telegram, Whatsapp, Telephone, GeoAltFill,
} from 'react-bootstrap-icons';
import { actions } from '../slices/index.js';
import logo from '../assets/sticker.webp';

const NavLink = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const isWide = useMediaQuery('(min-width: 860px)');
  const isMainPage = location.pathname === '/';

  const handleClose = () => {
    dispatch(actions.navbarClose());
  };

  const pagesMap = {
    gallery: ScrollLink,
    services: ScrollLink,
    team: RouterLink,
    contacts: ScrollLink,
  };

  return (
    isMainPage
      ? (
        <div className={isWide ? 'd-flex p-2' : ''}>
          {Object.entries(pagesMap).map(([pageName, route]) => (
            <Nav.Link
              key={pageName}
              as={route}
              to={pageName}
              duration={500}
              className="p-0"
              onClick={handleClose}
            >
              {t(`navbar.${pageName}`)}
            </Nav.Link>
          ))}
        </div>
      )
      : (
        <Nav.Link as={RouterLink} to="/" onClick={handleClose}>{t('navbar.main')}</Nav.Link>
      )
  );
};

const OffcanvasBody = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 860px)');

  return (
    <Offcanvas.Body className={`d-flex flex-column ${!isWide ? 'custom-offcanvas-body' : ''}`}>
      {isWide
        ? (
          <Nav className="d-flex justify-content-end">
            <NavLink />
          </Nav>
        )
        : (
          <Nav className="d-flex h-100 justify-content-between">
            <NavLink />
            <div>
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
          </Nav>
        )}
    </Offcanvas.Body>
  );
};

const NavBar = () => {
  const isWide = useMediaQuery('(min-width: 840px)');
  const location = useLocation();
  const dispatch = useDispatch();
  const isMainPage = location.pathname === '/';
  const { isShow } = useSelector((state) => state.navbar);
  const navigate = useNavigate();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleOpen = () => {
    dispatch(actions.navbarShow());
  };

  const handleClose = () => {
    dispatch(actions.navbarClose());
  };

  return (
    <Navbar expand={isWide} bg="light" sticky="top">
      <Container fluid>
        <Navbar.Brand onClick={isMainPage ? scrollToTop : () => navigate('/')}>
          <Image src={logo} alt="Barbershop Logo" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={handleOpen}
        />
        <Navbar.Offcanvas
          show={isShow}
          aria-labelledby="offcanvasNavbarLabel"
          placement="top"
          className="w-100 h-75"
        >
          <Offcanvas.Header
            closeButton
            className="custom-offcanvas-header"
            onClick={handleClose}
          >
            <Offcanvas.Title onClick={scrollToTop}>
              <Image src={logo} alt="Barbershop Logo" className="nav-logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <OffcanvasBody />
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
