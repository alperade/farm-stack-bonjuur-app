import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  membership: "",
  bedrooms: 0,
  bathrooms: 0,
  humans: 0,
  pets: 0,
  email: "",
  phone: "",
  address: "",
  start_date: "",
  time_slot: "",
  cleaner: "Pema",
  is_active: "",
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    updateMember: (state, action) => {
      state[action.payload.field] = action.payload.value;
      Object.assign(state, action.payload);
    },
  },
});

export const { updateMember } = memberSlice.actions;

export default memberSlice.reducer;
