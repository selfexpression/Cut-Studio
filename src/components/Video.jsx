import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@reactuses/core';
import cn from 'classnames';
import videoMP4 from '../assets/video/background-video.mp4';
import videoPoster from '../assets/video/video-poster.jpg';
import hooks from '../hooks/index.js';

const Video = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 460px)');
  const { scrollY } = hooks.useScrollY();
  const [isScrolled, setScrolled] = useState(false);
  const textClasses = cn(
    'text-center',
    'video-text',
    { 'fade-up': isScrolled },
  );

  useEffect(() => {
    if (scrollY > 170) {
      setScrolled(true);
    }
  }, [scrollY]);
  console.log(scrollY);

  return (
    <section id="video" className="bg-light">
      <div className="video-container">
        <div className={textClasses}>
          <p className="text-content aqua-color p-5">{t('video.paragraph')}</p>
        </div>
        <video
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          className="videoframe d-block"
          poster={videoPoster}
        >
          <source src={videoMP4} type="video/mp4" />
        </video>
        {isWide ? (<div className="video-image" />) : null}
      </div>
    </section>
  );
};

export default Video;
