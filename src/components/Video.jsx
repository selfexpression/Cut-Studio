import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@reactuses/core';
import videoMP4 from '../assets/video/background-video.mp4';
import videoPoster from '../assets/video/video-poster.jpg';

const Video = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 460px)');

  return (
    <section id="video" className="bg-light">
      <div className="video-container">
        <div className="text-center video-text">
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
