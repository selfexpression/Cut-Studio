import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShow: false,
};

const slice = createSlice({
  name: 'Navbar',
  initialState,
  reducers: {
    navbarShow: (state) => {
      state.isShow = true;
    },
    navbarClose: (state) => {
      state.isShow = false;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
