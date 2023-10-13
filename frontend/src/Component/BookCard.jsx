import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTofavourite } from "./helper/Store/Slice/favouriteSlice";

const BookCard = ({ book }) => {
  const { title, coverImgLink, author, _id, review } = book;
  const dispatch = useDispatch();
  const calculateAverageRating = () => {
    if (!review || review.length === 0) {
      return 0;
    }
    const totalRating = review.reduce((acc, r) => acc + r.rating, 0);
    return totalRating / review.length;
  };
  const averageRating = calculateAverageRating();

  return (
    <div className="w-[300px] h-[420px] md:w-[250px] md:h-[420px] flex flex-col justify-between px-1 pt-1 pb-8 m-2 border border-green-500 rounded-md shadow-xl">
      <Link className=" h-[65%] " to={`book/${_id}`}>
        <img
          src={coverImgLink}
          alt="poster"
          className="w-full border h-full rounded-md shadow-lg   "
        />
      </Link>
      <Link to={`book/${_id}`}>
        <p className="w-full font-bold text-lg text-center mt-2">{title}</p>
      </Link>
      <div className="">
        <p className="w-full flex justify-center px-4">
          <span>{author}</span>
        </p>
        <p className="w-full flex justify-center px-4 py-2">
          <span>{averageRating.toFixed(1)}⭐</span>
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(addTofavourite(book));
          alert(`"${title}" book  is added to myFavourite sucessfully ✅👍`);
        }}
        className="w-full mt-2 bg-green-200 font-bold text-blue-600">
        Add favourite <i className=" ml-2 fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default BookCard;
