import React from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "./helper/Store/Slice/wishlistSlice";

const WishList = () => {
  const wishlist = useSelector((store) => store.wishlist);
  const dispatch = useDispatch();
  console.log(wishlist);
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <h1 className="font-bold text-2xl p-3 shadow-xl">
        My Favourite ({wishlist.length})
      </h1>
      <hr />
      <section className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-auto ">
        {wishlist.map((movie) => {
          return (
            <div className="relative w-[300px] h-[400px] md:w-[250px] md:h-[400px] ">
              <MovieCard movie={movie} key={movie?._id} />
              <button
                onClick={() => {
                    
                  dispatch(removeFromWishlist(movie._id));
                  alert("Removed from My Favourite....✅")
                }}
                className="bg-slate-50 rounded-full tr w-8 h-8 absolute right-1 top-5 bg-opacity-80">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default WishList;
