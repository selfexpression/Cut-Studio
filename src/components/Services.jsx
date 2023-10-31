import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/index.js';
import cutImages from '../assets/gallery/services/index.js';

const Services = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleWidgetShow = () => {
    dispatch(actions.bookingShow());
  };

  return (
    <section id="services" className="bg-light text-center p-4">
      <div className="text-center m-0">
        <h1 className="mb-4 text-header aqua-color">
          {t('services.heading')}
        </h1>
        <p className="p-3 text-content">
          {t('services.description')}
        </p>
      </div>
      <div className="d-flex services-flow">
        {cutImages.map(({ image, id }) => (
          <div
            key={id}
            className="d-flex flex-column justify-content-around m-2 services-card rounded-2"
          >
            <img src={image} alt="card" className="h-70" />
            <div className="text-start text-content p-3">
              {t(`services.names.${id}`)}
            </div>
          </div>
        ))}
      </div>
      <div className="w-100 h-100 mt-5">
        <button
          type="button"
          aria-label={t('ariaLabels.bookingBtn')}
          className="mt-auto services-btn booking-btn rounded-2"
          onClick={handleWidgetShow}
        >
          {t('services.chooseService')}
        </button>
      </div>
    </section>
  );
};

export default Services;
