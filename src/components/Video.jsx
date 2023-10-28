import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@reactuses/core';
import videoMP4 from '../assets/video/output2.mp4';
import videoWebm from '../assets/video/output.webm';
import videoPoster from '../assets/video-poster.jpg';

const Video = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 660px)');

  return (
    <section id="video" className="bg-light">
      <div className="video-container">
        <div className="text-center video-text">
          <p className="text-content aqua-color p-5">{t('description.paragraph1')}</p>
        </div>
        <video
          autoPlay
          muted
          loop
          preload="auto"
          className="videoframe d-block"
          poster={videoPoster}
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
