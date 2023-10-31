import React, { useEffect, useRef } from 'react';
import {
  Telegram, Whatsapp, Telephone,
} from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { useYMaps } from '@pbe/react-yandex-maps';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/index.js';
import links from '../utils/links.js';

const Ymap = () => {
  const ymaps = useYMaps(['Map', 'Placemark']);
  const mapRef = useRef(null);

  useEffect(() => {
    const settings = {
      center: [55.025854, 82.931218],
      placemark: [55.025854, 82.931218],
      zoom: 14,
    };

    if (!ymaps || !mapRef.current) {
      return;
    }

    mapRef.current = new ymaps.Map(mapRef.current, {
      center: settings.center,
      zoom: settings.zoom,
    });

    const placemark = new ymaps.Placemark(settings.placemark);
    mapRef.current.geoObjects.add(placemark);
  }, [ymaps]);

  return (
    <div ref={mapRef} className="map" />
  );
};

const Footer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleWidgetShow = () => {
    dispatch(actions.bookingShow());
  };

  return (
    <section id="footer" className="bg-dark">
      <div className="footer-container">
        <div className="footer-contacts text-center p-5">
          <h2 className="footer-head m-3">{t('footer.ourContacts')}</h2>
          <div className="m-3 footer-text">
            <a href={links.whatsapp}>
              <Whatsapp className="me-2" />
            </a>
            <a href={links.telegram}>
              <Telegram className="me-2" />
            </a>
            <div className="d-inline me-2">
              <Telephone />
              <a href={links.telephone}>
                <button
                  type="button"
                  aria-label={t('ariaLabels.callBtn')}
                  className="rounded-5 m-2 btn-info-booking call-btn booking-btn contact-links"
                >
                  <span>{t('navbar.phoneNumber')}</span>
                </button>
              </a>
            </div>
            <button
              type="button"
              aria-label={t('ariaLabels.bookingBtn')}
              className="btn-info-booking booking-btn rounded-1 m-2"
              onClick={handleWidgetShow}
            >
              <span>{t('navbar.onlineBooking')}</span>
            </button>
          </div>
        </div>
        <div className="map-container">
          <h2 className="footer-head m-5 text-center">{t('footer.findUsOnMap')}</h2>
          <Ymap />
        </div>
      </div>
    </section>
  );
};

export default Footer;
