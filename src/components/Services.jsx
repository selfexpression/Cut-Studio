import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { actions } from '../slices/index.js';
import hooks from '../hooks/index.js';
import cutImages from '../assets/gallery/services/index.js';

const Services = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { scrollY } = hooks.useScrollY();
  const [isScrolled, setScrolled] = useState(false);
  const cardClasses = cn(
    'd-flex',
    'services-flow',
    'mt-5',
    { 'scale-down': isScrolled },
  );
  const buttonClasses = cn(
    'mt-auto',
    'services-btn',
    'booking-btn',
    'rounded-2',
    { 'scale-up-btn': isScrolled },
  );
  const textClasses = cn(
    'services-text',
    'text-center',
    'mt-5',
    { fade: isScrolled },
  );

  useEffect(() => {
    if (scrollY > 1500) {
      setScrolled(true);
    }
  }, [scrollY]);

  const handleWidgetShow = () => {
    dispatch(actions.bookingShow());
  };

  return (
    <section id="services" className="bg-light text-center p-4">
      <div className={textClasses}>
        <h1 className="mb-4 text-head aqua-color">
          {t('services.heading')}
        </h1>
        <p className="p-3 text-content">
          {t('services.description')}
        </p>
      </div>
      <div className={cardClasses}>
        {cutImages.map(({ image, id }) => (
          <div
            key={id}
            className="d-flex flex-column justify-content-around services-card m-2 rounded-2"
          >
            <img
              src={image}
              alt="card"
              className={isScrolled ? 'scale-up' : ''}
              loading="lazy"
            />
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
          className={buttonClasses}
          onClick={handleWidgetShow}
        >
          {t('services.chooseService')}
        </button>
      </div>
    </section>
  );
};

export default Services;
