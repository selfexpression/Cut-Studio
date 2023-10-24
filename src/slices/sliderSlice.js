import { createSlice } from '@reduxjs/toolkit';
import carouselImages from '../assets/gallery/carousels/index.js';

const initialState = {
  currentSlide: 0,
  images: carouselImages,
};

const slice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    nextSlide: (state) => {
      const { currentSlide, images } = state;
      state.currentSlide = (currentSlide + 1) % images.length;
    },
    prevSlide: (state) => {
      const { currentSlide, images } = state;
      state.currentSlide = (currentSlide + (images.length - 1)) % images.length;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
