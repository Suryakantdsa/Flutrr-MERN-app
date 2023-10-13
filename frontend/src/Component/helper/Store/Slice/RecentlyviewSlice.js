import { createSlice } from "@reduxjs/toolkit";

const recentviewSlice = createSlice({
  name: "recentlyview",
  initialState: [],
  reducers: {
    addTorecentlyview: (state, action) => {
      const itemToAdd = action.payload;
      if (!state.some((item) => item._id === itemToAdd._id)) {
        state.push(itemToAdd);
      }
    },
    clearRecentlyView: (state, action) => {
        return [];
    },
  },
});

export const { addTorecentlyview, clearRecentlyView } = recentviewSlice.actions;
export default recentviewSlice.reducer;
