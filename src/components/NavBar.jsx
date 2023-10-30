import React from 'react';
import { useMediaQuery } from '@reactuses/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  List as ListButton, X as CloseButton,
  Telegram, Whatsapp, Telephone, GeoAltFill,
} from 'react-bootstrap-icons';
import cn from 'classnames';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useLocation, Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { actions } from '../slices/index.js';
import logo from '../assets/sticker.webp';

const NavLink = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const handleClose = () => {
    dispatch(actions.navbarClose());
  };

  const pagesMap = {
    carousel: ScrollLink,
    services: ScrollLink,
    team: RouterLink,
    info: ScrollLink,
  };

  return (
    isMainPage
      ? (
        Object.entries(pagesMap).map(([pageName, Link]) => (
          <Link
            key={pageName}
            to={pageName}
            duration={500}
            smooth="true"
            className="nav-link m-1"
            onClick={handleClose}
          >
            {t(`navbar.${pageName}`)}
          </Link>
        ))
      )
      : (
        <RouterLink
          to="/"
          onClick={handleClose}
          className="nav-link"
        >
          {t('navbar.main')}
        </RouterLink>
      )
  );
};

const OffcanvasBody = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 860px)');
  const { isShow } = useSelector((state) => state.navbar);
  const classes = cn('navbar-body', {
    'navbar-body-show': isShow,
    'navbar-body-hide': !isShow,
  });

  return (
    isWide
      ? (
        <div className="d-flex">
          <NavLink />
        </div>
      )
      : (
        <div className={classes}>
          <div className="navbar-links d-flex flex-column p-2">
            <NavLink />
          </div>
          <div className="navbar-contacts p-2">
            <div className="m-2">
              <GeoAltFill />
              {' '}
              {t('navbar.city')}
            </div>
            <div className="m-2">{t('navbar.location')}</div>
            <div className="m-2">
              <Telephone />
              {' '}
              <a href="tel:+79692281139">{t('navbar.phoneNumber')}</a>
            </div>
            <div className="m-2">
              <Telegram />
              {' '}
              {t('navbar.telegram')}
            </div>
            <div className="m-2">
              <Whatsapp />
              {' '}
              {t('navbar.whatsapp')}
            </div>
          </div>
        </div>
      )
  );
};

const ToggleButton = () => {
  const dispatch = useDispatch();
  const { isShow } = useSelector((state) => state.navbar);

  const handleOpen = () => {
    dispatch(actions.navbarShow());
  };

  const handleClose = () => {
    dispatch(actions.navbarClose());
  };

  return (
    !isShow
      ? (
        <ListButton
          type="button"
          aria-label="open-button"
          onClick={handleOpen}
          className="interactive-button"
        />
      )
      : (
        <CloseButton
          type="button"
          aria-label="close-button"
          className="interactive-button"
          onClick={handleClose}
        />
      )
  );
};

const NavBar = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isWide = useMediaQuery('(min-width: 860px)');
  const navigate = useNavigate();
  const { isShow } = useSelector((state) => state.navbar);
  const rowsCount = isShow ? '40px 70vh' : '40px 0';

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav
      className="navbar p-2"
      style={{ gridTemplateRows: rowsCount }}
    >
      <span
        className="navbar-brand ms-3"
        onClick={isMainPage ? scrollToTop : () => navigate('/')}
      >
        <img src={logo} alt="Barbershop Logo" className="nav-logo" />
      </span>
      {!isWide ? <ToggleButton /> : null}
      <OffcanvasBody />
    </nav>
  );
};

export default NavBar;
