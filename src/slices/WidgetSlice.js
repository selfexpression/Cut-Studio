import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShow: false,
};

const slice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    widgetShow: (state) => {
      state.isShow = true;
    },
    widgetClose: (state) => {
      state.isShow = false;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
