import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceImageDataType } from '../types';
import { placeImages } from '../constants';

const initialState: { places: PlaceImageDataType[] } = {
  places: placeImages,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<number>) => {
      const place = state.places.find(p => p.id === action.payload);
      if (place) {
        place.isFavourite = !place.isFavourite;
      }
    },
  },
});

export const { toggleFavourite } = placesSlice.actions;
export default placesSlice.reducer;
