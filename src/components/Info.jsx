import React from 'react';
import {
  Telegram, Whatsapp, Telephone, GeoAltFill,
} from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/index.js';

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
              className="rounded-5 m-2 btn-online-booking call-btn"
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
            className="btn-online-booking rounded-5 m-2"
            onClick={handleWidgetShow}
          >
            <span className="booking-btn">{t('navbar.onlineBooking')}</span>
          </button>
        </div>
        <div className="map-container p-5">
          <h2 className="info-head m-5 text-center">{t('contacts.findUsOnMap')}</h2>
          <div id="map" className="map" />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
