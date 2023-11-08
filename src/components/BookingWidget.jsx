import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { X as CloseButton } from 'react-bootstrap-icons';
import { actions } from '../slices/index.js';
import links from '../utils/links.js';
import { getBooking } from '../utils/selectors.js';

const BookingWidget = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isShow } = useSelector(getBooking);

  const handleWidgetClose = () => {
    dispatch(actions.bookingClose());
  };

  return (
    <aside className={`booking-widget ${isShow ? 'show-booking' : 'hide-booking'}`}>
      <div className="booking-header d-flex justify-content-end align-items-end">
        <button
          type="button"
          aria-label={t('ariaLabels.closeBtn')}
          onClick={handleWidgetClose}
          className="interactive-button booking-widget-btn p-0"
        >
          <CloseButton className="w-100 h-100" />
        </button>
      </div>
      <div className="p-0 m-0">
        <iframe
          title={t('others.yclients')}
          src={links.yclientsFormLink}
          className="p-0 m-0 w-100 vh-100 booking-frame"
        />
      </div>
    </aside>
  );
};

export default BookingWidget;
