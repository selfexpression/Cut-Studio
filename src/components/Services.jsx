import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useMediaQuery } from '@reactuses/core';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/index.js';
import cutImages from '../assets/gallery/services/index.js';

const Services = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isWide = useMediaQuery('(min-width: 860px)');
  const classes = cn('text-center', 'p-0 m-0', {
    'w-50 mx-auto': isWide,
    'w-100': !isWide,
  });

  const handleWidgetShow = () => {
    dispatch(actions.bookingShow());
  };

  return (
    <section id="services" className="bg-light text-center py-5">
      <div className={classes}>
        <h2 className="mb-4 text-header">{t('services.heading')}</h2>
        <p className="p-3 text-content">{t('services.description')}</p>
      </div>
      <div className="d-flex services-flow">
        {cutImages.map(({ image, id }) => (
          <div key={id} className="d-flex flex-column justify-content-between m-2 services-card rounded-2">
            <img src={image} alt="card" className="h-70" />
            <div className="text-start p-3">{t(`services.names.${id}`)}</div>
          </div>
        ))}
      </div>
      <div className="w-100 h-100 mt-5">
        <button
          type="button"
          aria-label="booking-btn"
          className="mt-auto services-btn rounded-2"
          onClick={handleWidgetShow}
        >
          {t('services.chooseService')}
        </button>
      </div>
    </section>
  );
};

export default Services;
