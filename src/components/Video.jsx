import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@reactuses/core';
import videoMP4 from '../assets/video/output.mp4';
import videoWebm from '../assets/video/output.webm';

const Video = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 660px)');

  return (
    <section id="video" className="bg-light">
      <div className="video-container">
        <div className="text-center video-text">
          <p className="text-content p-5">{t('description.paragraph1')}</p>
        </div>
        <video
          autoPlay
          muted
          loop
          className="videoframe d-block"
        >
          <source src={videoMP4} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
        </video>
        {isWide ? (<div className="video-image" />) : null}
      </div>
    </section>
  );
};

export default Video;
