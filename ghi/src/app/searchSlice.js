import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "Seattle",
  date: "2022-11-18",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state[action.payload.field] = action.payload.value;
      Object.assign(state, action.payload);
    },
  },
});

export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;
