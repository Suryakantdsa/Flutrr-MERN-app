import { configureStore } from "@reduxjs/toolkit";
import RecentlyviewSlice from "./Slice/RecentlyviewSlice";
import bookSlice from "./Slice/bookSlice";
import masterBookData from "./Slice/masterBookData";
import favouriteSlice from "./Slice/favouriteSlice";

const store=configureStore({
    reducer:{
        book:bookSlice,
        masterData:masterBookData,
        favourite:favouriteSlice,
        recentlyview:RecentlyviewSlice
    }
})

export default store