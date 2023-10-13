import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Slice/movieSlice";
import masterMovieData from "./Slice/masterMovieData";
import wishlistSlice from "./Slice/wishlistSlice";
import RecentlyviewSlice from "./Slice/RecentlyviewSlice";



const store=configureStore({
    reducer:{
        movie:movieSlice,
        masterData:masterMovieData,
        wishlist:wishlistSlice,
        recentlyview:RecentlyviewSlice
    }
})
export default store