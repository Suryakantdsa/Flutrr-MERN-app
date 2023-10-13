import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToWishlist } from "./helper/Store/Slice/wishlistSlice";

const MovieCard = ({ movie }) => {
  const { title, posterImg, releaseYear, _id,genres,duration } = movie;
  const dispatch=useDispatch()
  return (
    <div className="w-[300px] h-[350px] md:w-[250px] md:h-[350px] flex flex-col p-2 m-2 border border-green-500 rounded-md shadow-xl hover:scale-105">
      <Link className=" h-[65%] " to={`movie/${_id}`}>
        <img
          src={posterImg}
          alt="poster"
          className="w-full border h-full rounded-md shadow-lg   "
        />
      </Link>
      <Link to={`movie/${_id}`}>
        <p className="w-full font-bold text-lg text-center mt-2">
          {title}
        </p>

      </Link> 
      <p className="w-full flex justify-between px-4">
        <span>⭐ 8.6</span>
        <span>
          Author
        </span>
      </p>
      <button
        onClick={() => {

          dispatch(addToWishlist(movie));
          alert(title +" book  is added to wishlist sucessfully")
        }}
        className="w-full mt-2 bg-green-200 font-bold text-blue-600">
        Add favourite <i className=" ml-2 fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default MovieCard;
