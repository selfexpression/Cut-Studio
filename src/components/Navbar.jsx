import React from 'react';
import { useMediaQuery } from '@reactuses/core';
import { useDispatch, useSelector } from 'react-redux';
import { Telegram, Whatsapp } from 'react-bootstrap-icons';
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
    footer: ScrollLink,
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
            className="nav-link p-3 me-3"
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

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const isWide = useMediaQuery('(min-width: 860px)');
  const classes = cn('me-4', {
    'lang-switch-btn': isWide,
    'lang-switch-btn-sm': !isWide,
    'mb-4': !isWide,
  });

  const handleLangSwitch = () => {
    const { language } = i18n;
    const lang = (language === 'en' ? 'ru' : 'en');
    i18n.changeLanguage(lang);
  };

  return (
    <button
      type="button"
      aria-label={t('ariaLabels.langSwitcher')}
      onClick={handleLangSwitch}
      className={classes}
    >
      <span>{t('lang.currentLang')}</span>
    </button>
  );
};

const NavbarBody = () => {
  const isWide = useMediaQuery('(min-width: 860px)');
  const { isShow } = useSelector(getNavbar);
  const classes = cn('navbar-body', {
    'navbar-body-show': isShow,
    'navbar-body-hide': !isShow,
  });
  const socials = {
    telegram: Telegram,
    whatsapp: Whatsapp,
  };

  return (
    isWide
      ? (
        <div className="navbar-items d-flex align-items-center">
          <div className="d-flex me-2">
            <NavLink />
          </div>
          <LangSwitcher />
        </div>
      )
      : (
        <div className={classes}>
          <div className="navbar-links d-flex flex-column p-2">
            <NavLink />
          </div>
          <div className="navbar-contacts p-3 d-flex">
            {Object.entries(socials).map(([contact, Image]) => (
              <a
                key={contact}
                href={links[contact]}
                className="m-2 d-flex align-items-center contact-links"
              >
                <Image className="me-1" />
              </a>
            ))}
          </div>
          <LangSwitcher />
        </div>
      )
  );
};

const ToggleButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isShow } = useSelector(getNavbar);

  const handleOpen = () => {
    dispatch(actions.navbarShow());
  };

  const handleClose = () => {
    dispatch(actions.navbarClose());
  };

  return (
    <div
      className={`toggle-menu${isShow ? ' toggle-menu-open' : ''}`}
      type="button"
      aria-label={t('ariaLabels.openBtn')}
      onClick={!isShow ? handleOpen : handleClose}
    >
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const isMainPage = location.pathname === routes.mainPage;
  const isWide = useMediaQuery('(min-width: 860px)');
  const navigate = useNavigate();
  const { isShow } = useSelector(getNavbar);
  const rowsCount = isShow ? '40px 35vh' : '40px 0';
  const { scrollToTop } = scroll;

  return (
    <nav
      className="navbar p-2"
      style={{ gridTemplateRows: rowsCount }}
    >
      <span
        className="navbar-brand ms-3 move-up"
        onClick={isMainPage ? scrollToTop : () => navigate(routes.mainPage)}
      >
        <img src={logo} alt={t('alts.logo')} className="nav-logo" />
      </span>
      {!isWide ? <ToggleButton /> : null}
      <NavbarBody />
    </nav>
  );
};

export default Navbar;
