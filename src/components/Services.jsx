import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { actions } from '../slices/index.js';
import hooks from '../hooks/index.js';
import cutImages from '../assets/gallery/services/index.js';

const ServiceText = ({ isScrolled }) => {
  const { t } = useTranslation();
  const textClasses = cn(
    'services-text',
    'text-center',
    'p-4',
    { fade: isScrolled },
  );

  return (
    <div className={textClasses}>
      <h1 className="mb-4 text-head aqua-color">
        {t('services.heading')}
      </h1>
      <p className="p-3 text-content">
        {t('services.description')}
      </p>
    </div>
  );
};

const ServiceCards = ({ isScrolled }) => {
  const { t } = useTranslation();
  const cardClasses = cn(
    'd-flex',
    'align-items-center',
    'services-flow',
    'ms-2',
    { 'scale-down': isScrolled },
  );

  return (
    <div className={cardClasses}>
      {cutImages.map(({ image, id }) => (
        <div
          key={id}
          className="d-flex flex-column justify-content-between services-card ms-3 rounded-2"
        >
          <img
            src={image}
            alt="card"
            loading="lazy"
            className={isScrolled ? 'scale-up' : ''}
          />
          <div className="service-name text-start text-content p-2">
            {t(`services.names.${id}`)}
          </div>
        </div>
      ))}
    </div>
  );
};

const BookingButton = ({ isScrolled }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const buttonClasses = cn(
    'mt-auto',
    'services-btn',
    'booking-btn',
    'rounded-2',
    { 'scale-up-btn': isScrolled },
  );

  const handleWidgetShow = () => {
    dispatch(actions.bookingShow());
  };

  return (
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
  );
};

const Services = () => {
  const { scrollY } = hooks.useScrollY();
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (scrollY > 1500) {
      setScrolled(true);
    }
  }, [scrollY]);

  return (
    <section id="services" className="bg-light text-center">
      <ServiceText isScrolled={isScrolled} />
      <ServiceCards isScrolled={isScrolled} />
      <BookingButton isScrolled={isScrolled} />
    </section>
  );
};

export default Services;
