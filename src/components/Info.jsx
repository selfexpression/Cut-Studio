import React, { useEffect, useRef } from 'react';
import {
  Telegram, Whatsapp, Telephone, GeoAltFill,
} from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { useYMaps } from '@pbe/react-yandex-maps';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/index.js';

const Ymap = () => {
  const ymaps = useYMaps(['Map', 'Placemark']);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    mapRef.current = new ymaps.Map(mapRef.current, {
      center: [55.025854, 82.931218],
      zoom: 14,
    });

    const placemark = new ymaps.Placemark([55.025854, 82.931218]);
    mapRef.current.geoObjects.add(placemark);
  }, [ymaps]);

  return (
    <div ref={mapRef} className="map" />
  );
};

const InfoSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleWidgetShow = () => {
    dispatch(actions.bookingShow());
  };

  return (
    <section id="info" className="bg-dark">
      <div className="d-flex flex-wrap justify-content-between align-items-end">
        <div className="text-center p-5">
          <h2 className="info-head m-3">{t('contacts.ourContacts')}</h2>
          <div className="m-3 info-text">
            <Whatsapp className="me-2" />
            <Telegram className="me-2" />
            <Telephone className="me-2" />
            <button
              type="button"
              aria-label="calling-button"
              className="rounded-5 m-2 btn-info-booking call-btn booking-btn"
            >
              <a href="tel:+79692281139">{t('navbar.phoneNumber')}</a>
            </button>
          </div>
          <p className="m-3 info-text">
            <GeoAltFill className="me-2" />
            {t('navbar.location')}
          </p>
          <button
            type="button"
            aria-label="booking-btn"
            className="btn-info-booking booking-btn rounded-1 m-2"
            onClick={handleWidgetShow}
          >
            <span className="booking-btn">{t('navbar.onlineBooking')}</span>
          </button>
        </div>
        <div className="map-container">
          <h2 className="info-head m-5 text-center">{t('contacts.findUsOnMap')}</h2>
          <Ymap />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
