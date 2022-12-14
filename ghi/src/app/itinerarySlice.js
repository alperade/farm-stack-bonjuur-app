import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itineraryId: "",
};

export const itinerarySlice = createSlice({
  name: "itinerary",
  initialState,
  reducers: {
    updateItinerary: (state, action) => {
      state[action.payload.field] = action.payload.value;
      Object.assign(state, action.payload);
    },
  },
});

export const { updateItinerary } = itinerarySlice.actions;

export default itinerarySlice.reducer;
