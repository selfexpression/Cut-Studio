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
import routes from '../utils/routes.js';
import links from '../utils/links.js';
import { getNavbar } from '../utils/selectors.js';

const NavLink = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const isMainPage = location.pathname === routes.mainPage;

  const handleClose = () => {
    dispatch(actions.navbarClose());
  };

  const pagesMap = {
    services: ScrollLink,
    team: RouterLink,
    carousel: ScrollLink,
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
          to={routes.mainPage}
          onClick={handleClose}
          className="nav-link"
        >
          {t('navbar.main')}
        </RouterLink>
      )
  );
};

const NavbarBody = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 860px)');
  const { isShow } = useSelector(getNavbar);
  const classes = cn('navbar-body', {
    'navbar-body-show': isShow,
    'navbar-body-hide': !isShow,
  });
  const contacts = {
    telegram: Telegram,
    whatsapp: Whatsapp,
    phoneNumber: Telephone,
  };

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
            {Object.entries(contacts).map(([contact, Image]) => (
              <a
                key={contact}
                href={links[contact]}
                className="m-2 d-block contact-links"
              >
                <Image />
                {' '}
                <span>{t(`navbar.${contact}`)}</span>
              </a>
            ))}
            <div className="m-2">
              <GeoAltFill />
              {' '}
              {t('navbar.city')}
              <br />
              <span>{t('navbar.location')}</span>
            </div>
          </div>
        </div>
      )
  );
};

const ToggleButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
          aria-label={t('ariaLabels.openBtn')}
          onClick={handleOpen}
          className="interactive-button"
        />
      )
      : (
        <CloseButton
          type="button"
          aria-label={t('ariaLabels.closeBtn')}
          className="interactive-button"
          onClick={handleClose}
        />
      )
  );
};

const NavBar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const isMainPage = location.pathname === routes.mainPage;
  const isWide = useMediaQuery('(min-width: 860px)');
  const navigate = useNavigate();
  const { isShow } = useSelector(getNavbar);
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
        onClick={isMainPage ? scrollToTop : () => navigate(routes.mainPage)}
      >
        <img src={logo} alt={t('alts.logo')} className="nav-logo" />
      </span>
      {!isWide ? <ToggleButton /> : null}
      <NavbarBody />
    </nav>
  );
};

export default NavBar;
