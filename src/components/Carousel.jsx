import React, { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons';
import { actions } from '../slices/index.js';

const Gallery = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currentSlide, images } = useSelector((state) => state.slider);

  const nextSlide = useCallback(() => {
    dispatch(actions.nextSlide());
  }, [dispatch]);

  const prevSlide = () => {
    dispatch(actions.prevSlide());
  };

  useEffect(() => {
    const intervalId = setInterval(() => nextSlide(), 5000);

    return () => clearInterval(intervalId);
  }, [dispatch, currentSlide, nextSlide]);

  return (
    <section id="carousel" className="bg-light">
      <div className="carousel-text p-5">
        <p className="text-content text-center">{t('carousel.description')}</p>
      </div>
      <div className="relative carousel-items">
        <div className="carousel">
          {images.map(({ image, id }) => (
            <div
              className={`slide d-flex flex-column ${id === currentSlide ? 'active' : 'inactive'}`}
              key={id}
            >
              <img src={image} alt={`Slide ${id}`} className="d-block w-100 h-100" />
            </div>
          ))}
        </div>
        <ChevronCompactRight
          className="next"
          type="button"
          aria-label="next"
          onClick={nextSlide}
        />
        <ChevronCompactLeft
          className="prev"
          type="button"
          aria-label="prev"
          onClick={prevSlide}
        />
      </div>
    </section>
  );
};

export default Gallery;
