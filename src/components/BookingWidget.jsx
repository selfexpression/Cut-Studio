import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X as CloseButtonIcon } from 'react-bootstrap-icons';
import { actions } from '../slices/index.js';

const yclientsFormLink = 'https://n984073.yclients.com/';

const BookingWidget = () => {
  const dispatch = useDispatch();
  const { isShow } = useSelector((state) => state.booking);

  const handleWidgetClose = () => {
    dispatch(actions.bookingClose());
  };

  return (
    <div className={`booking-widget ${isShow ? 'show-booking' : 'hide-booking'}`}>
      <div className="booking-header d-flex justify-content-end align-items-end">
        <CloseButtonIcon
          type="button"
          aria-label="close-button"
          onClick={handleWidgetClose}
          className="close-button"
        />
      </div>
      <div className="p-0 m-0">
        <iframe
          title="Yclients Form"
          src={yclientsFormLink}
          className="p-0 m-0 w-100 vh-100"
        />
      </div>
    </div>
  );
};

export default BookingWidget;
