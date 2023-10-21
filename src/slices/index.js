import { configureStore } from '@reduxjs/toolkit';
import bookingWidgetSlice, { actions as bookingWidgetActions } from './bookingWidgetSlice.js';
import navbarWidgetSlice, { actions as navbarWidgetActions } from './navbarWidgetSlice.js';

export const actions = {
  ...bookingWidgetActions,
  ...navbarWidgetActions,
};

export default configureStore({
  reducer: {
    booking: bookingWidgetSlice,
    navbar: navbarWidgetSlice,
  },
});
