import React, { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  ChevronCompactLeft as ArrowLeft,
  ChevronCompactRight as ArrowRight,
} from 'react-bootstrap-icons';
import { actions } from '../slices/index.js';
import { getSlider } from '../utils/selectors.js';

const Arrows = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const nextSlide = useCallback(() => {
    dispatch(actions.nextSlide());
  }, [dispatch]);

  const prevSlide = () => {
    dispatch(actions.prevSlide());
  };

  useEffect(() => {
    const intervalId = setInterval(() => nextSlide(), 5000);

    return () => clearInterval(intervalId);
  }, [dispatch, nextSlide]);

  return (
    <>
      <ArrowRight
        className="next"
        type="button"
        aria-label={t('ariaLabels.next')}
        onClick={nextSlide}
      />
      <ArrowLeft
        className="prev"
        type="button"
        aria-label={t('ariaLabels.prev')}
        onClick={prevSlide}
      />
    </>
  );
};

const Carousel = () => {
  const { t } = useTranslation();
  const { currentSlide, images } = useSelector(getSlider);

  return (
    <section id="carousel" className="bg-light">
      <div className="carousel-text p-5">
        <p className="text-content text-center">{t('carousel.description')}</p>
      </div>
      <div className="relative carousel-items h-100">
        <div className="carousel h-100">
          {images.map(({ image, id }) => (
            <div
              className={`slide d-flex flex-column ${id === currentSlide ? 'active' : 'inactive'}`}
              key={id}
            >
              <img
                src={image}
                loading="lazy"
                alt={`${t('alts.slider')} ${id}`}
                className="d-block w-100 h-100"
              />
            </div>
          ))}
        </div>
        <Arrows />
      </div>
    </section>
  );
};

export default Carousel;
