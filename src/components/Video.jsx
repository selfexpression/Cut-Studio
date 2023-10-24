import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@reactuses/core';
import girlImage from '../assets/girl-model.jpg';
import videoMP4 from '../assets/video/output.mp4';
import videoWebm from '../assets/video/output.webm';

const Video = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 860px)');

  return (
    <section id="video" className="bg-light">
      {isWide
        ? (
          <div className="d-flex justify-content-around w-100 flex-1 vh-100">
            <div className="video-container h-100">
              <video
                autoPlay
                muted
                loop
                className="videoframe w-100"
              >
                <source src={videoMP4} type="video/mp4" />
                <source src={videoWebm} type="video/webm" />
              </video>
            </div>
            <img src={girlImage} alt="girl-model" className="align-self-center flex-1" />
            <div className="align-self-center p-5 text-center flex-1">
              <p className="text-content">{t('description.paragraph1')}</p>
            </div>
          </div>

        )
        : (
          <div className="d-flex flex-column justify-content-center p-0">
            <div className="text-center m-0 p-5 f-1 d-flex align-items-center">
              <p className="text-content">{t('description.paragraph1')}</p>
            </div>
            <div className="video-container h-100 f-2">
              <video
                autoPlay
                muted
                loop
                className="videoframe h-100 w-100"
              >
                <source src={videoMP4} type="video/mp4" />
                <source src={videoWebm} type="video/webm" />
              </video>
            </div>
          </div>
        )}
    </section>
  );
};

export default Video;
