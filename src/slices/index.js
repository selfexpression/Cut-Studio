import { configureStore } from '@reduxjs/toolkit';
import bookingWidgetSlice, { actions as bookingWidgetActions } from './bookingWidgetSlice.js';
import navbarWidgetSlice, { actions as navbarWidgetActions } from './navbarWidgetSlice.js';
import sliderSlice, { actions as sliderActions } from './sliderSlice.js';

export const actions = {
  ...bookingWidgetActions,
  ...navbarWidgetActions,
  ...sliderActions,
};

export default configureStore({
  reducer: {
    booking: bookingWidgetSlice,
    navbar: navbarWidgetSlice,
    slider: sliderSlice,
  },
});
