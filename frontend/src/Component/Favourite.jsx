import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourite } from "./helper/Store/Slice/favouriteSlice";
import BookCard from "./BookCard";

const Favourite = () => {
  const favourite = useSelector((store) => store.favourite);
  const dispatch = useDispatch();
  console.log(favourite);
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <h1 className="font-bold text-2xl p-3 shadow-xl">
        My Favourite ({favourite.length})
      </h1>
      <hr />
      <section className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-auto ">
        {favourite.map((book) => {
          return (
            <div className="relative w-[300px] h-[400px] md:w-[250px] md:h-[400px] ">
              <BookCard book={book} key={book?._id} />
              <button
                onClick={() => {
                    
                  dispatch(removeFromFavourite(book._id));
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

export default Favourite;
