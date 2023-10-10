import { configureStore } from '@reduxjs/toolkit';
import widgetSlice, { actions as widgetActions } from './WidgetSlice.js';

export const actions = {
  ...widgetActions,
};

export default configureStore({
  reducer: {
    widget: widgetSlice,
  },
});
