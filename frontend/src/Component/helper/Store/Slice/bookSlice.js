import { createSlice } from "@reduxjs/toolkit";

const allBook = createSlice({
    name: "book",
    initialState: [],
    reducers: {
        addBooksfromDb: (state, action) => {
            return action.payload;
        }
    }
});

export const { addBooksfromDb } = allBook.actions;
export default allBook.reducer;
