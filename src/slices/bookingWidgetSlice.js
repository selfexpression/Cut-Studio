import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShow: false,
};

const slice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    bookingShow: (state) => {
      state.isShow = true;
    },
    bookingClose: (state) => {
      state.isShow = false;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
