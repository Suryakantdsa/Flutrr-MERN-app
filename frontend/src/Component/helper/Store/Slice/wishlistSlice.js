import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const itemToAdd = action.payload;
      if (!state.some((item) => item._id === itemToAdd._id)) {
        state.push(itemToAdd);
      }
    },
    removeFromWishlist: (state, action) => {
      const itemIdToRemove = action.payload;
      return state.filter((item) => item._id !== itemIdToRemove);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlist.actions;
export default wishlist.reducer;
