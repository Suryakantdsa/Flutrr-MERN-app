import { createSlice } from "@reduxjs/toolkit";

const masterData = createSlice({
    name: "masterData",
    initialState: [],
    reducers: {
        addMasterFromDb: (state, action) => {
            return action.payload;
        }
    }
});

export const { addMasterFromDb } = masterData.actions;
export default masterData.reducer;
