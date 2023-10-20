import React from 'react';
import {
  Container,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@reactuses/core';
import girlImage from '../assets/girl-model.jpg';

const Video = () => {
  const { t } = useTranslation();
  const isWide = useMediaQuery('(min-width: 860px)');

  return (
    <section id="video" className="bg-light p-0">
      {isWide
        ? (
          <Container fluid className="d-flex justify-content-around w-100 p-5">
            <div className="video-container f-1">
              <iframe
                title="mobcutstudio"
                src="https://player.vimeo.com/video/876262583?muted=1&autoplay=1&loop=1&background=1&app_id=58479"
                allow="autoplay; fullscreen"
                className="videoframe w-100 p-0"
              />
            </div>
            <img src={girlImage} alt="girl-model" className="align-self-center f-1" />
            <div className="w-50 align-self-center text-center f-1">
              <p className="text-content p-0 m-0">{t('description.paragraph1')}</p>
            </div>
          </Container>
        )
        : (
          <Container fluid className="w-100 d-flex flex-column justify-content-center">
            <div className="text-center m-0 p-4 f-1 d-flex align-items-center">
              <p className="text-content">{t('description.paragraph1')}</p>
            </div>
            <div className="video-container m-0 f-2">
              <iframe
                title="mobcutstudio"
                src="https://player.vimeo.com/video/876262583?muted=1&autoplay=1&loop=1&background=1&app_id=58479"
                allow="autoplay; fullscreen"
                className="videoframe w-100 p-0"
              />
            </div>
          </Container>
        )}
    </section>
  );
};

export default Video;
