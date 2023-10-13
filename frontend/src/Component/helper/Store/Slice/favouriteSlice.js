import { createSlice } from "@reduxjs/toolkit";

const favourite = createSlice({
  name: "favourite",
  initialState: [],
  reducers: {
    addTofavourite: (state, action) => {
      const itemToAdd = action.payload;
      if (!state.some((item) => item._id === itemToAdd._id)) {
        state.push(itemToAdd);
      }
    },
    removeFromFavourite: (state, action) => {
      const itemIdToRemove = action.payload;
      return state.filter((item) => item._id !== itemIdToRemove);
    },
  },
});

export const { addTofavourite, removeFromFavourite } = favourite.actions;
export default favourite.reducer;
