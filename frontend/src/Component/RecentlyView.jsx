import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearRecentlyView } from "./helper/Store/Slice/RecentlyviewSlice";

const RecentlyView = () => {
  const recentlyview = useSelector((store) => store.recentlyview);
    const navigate=useNavigate()
  const dispatch = useDispatch();
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <h1 className="font-bold text-2xl p-4 shadow-xl w-full flex justify-between px-4">
        My recently view ({recentlyview.length})
        <button
         onClick={()=>{
             alert("Recently history is cleared ...👍👍👍")
            dispatch(clearRecentlyView())
            navigate("/")
        }}
         className="bg-red-500 text-white hover:bg-red-400 px-2 py-2 rounded-md"
         >
          Clear history
        </button>
      </h1>
      <section className="grid gap-2 md:gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-4 px-8 py-4">
        {recentlyview.map((movie) => {
          const { title, posterImg, releaseYear, _id, genres, duration } =
            movie;
          return (
            <div className="relative w-[200px] h-[300px] md:w-[150px] md:h-[200px] border shadow-xl  hover:scale-105">
              <Link className=" h-[85%] " to={`movie/${_id}`}>
                <img
                  src={posterImg}
                  alt="poster"
                  className="w-full border h-full rounded-md shadow-lg    "
                />
              </Link>
              <Link to={`movie/${_id}`}>
                <p className="w-full font-bold text-lg text-center mt-2">
                  {title} <span className="font-normal">({releaseYear})</span>
                </p>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default RecentlyView;
