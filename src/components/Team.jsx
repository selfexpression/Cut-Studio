import React from 'react';
import { useTranslation } from 'react-i18next';
import teammatePhotos from '../assets/gallery/teammates/index.js';

const TeamCards = () => {
  const { t } = useTranslation();

  return (
    <div className="team-card-container move-up">
      {teammatePhotos.map(({ photo, id }) => (
        <div
          key={id}
          className="team-card rounded-2"
        >
          <img
            src={photo}
            alt={t('alts.teammate')}
            className="rounded-2 w-100"
          />
          <div className="team-card-body p-3">
            <div className="text-center team-card-title">
              {t(`team.teammates.${id}`)}
            </div>
            <div className="team-card-text">
              {t(`team.teammatesDescription.${id}`)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="bg-light text-center py-5">
      <div className="team-container mt-5">
        <div className="team-text p-2 fade-down">
          <h1 className="text-center text-head aqua-color mb-4">
            {t('team.heading')}
          </h1>
          <p className="mb-5 text-content">
            {t('team.description')}
          </p>
        </div>
        <TeamCards />
      </div>
    </section>
  );
};

export default Team;
