import { configureStore } from '@reduxjs/toolkit';
import widgetSlice, { actions as widgetActions } from './widgetSlice.js';
import navbarSlice, { actions as navbarActions } from './navbarSlice.js';

export const actions = {
  ...widgetActions,
  ...navbarActions,
};

export default configureStore({
  reducer: {
    widget: widgetSlice,
    navbar: navbarSlice,
  },
});
