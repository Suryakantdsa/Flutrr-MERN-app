import { createSlice } from "@reduxjs/toolkit";

const allMovie = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        addMoviesfromDb: (state, action) => {
            return action.payload;
        }
    }
});

export const { addMoviesfromDb } = allMovie.actions;
export default allMovie.reducer;
