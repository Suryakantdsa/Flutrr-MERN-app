import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMoviesfromDb } from "./helper/Store/Slice/movieSlice";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    searchMovie(searchValue);
  }, [searchValue]);

  const movieData = useSelector((store) => store.movie);
  const masterData = useSelector((store) => store.masterData);

  const searchMovie = (payload) => {
    const searchTerm = payload.toLowerCase();
    const searchRes = masterData.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm);
      const genresMatch = item.genres.toLowerCase().includes(searchTerm);
      return titleMatch || genresMatch;
    });
  
    dispatch(addMoviesfromDb(searchRes));
  };
  
  
  return (
    <nav className="h-[13%] flex px-4 py-6 md:justify-between justify-center items-center bg-white">
      <div className="flex items-center">
        <i className="fa-solid fa-bars text-3xl md:text-4xl ml-2 text-pink-600"></i>
        {/* logo start   */}
        <Link to={"/"}>
          <div className="md:flex items-center border-[2px] mx-4 border-blue-300 hidden py-5 h-[2.1rem] ">
            <span className="text-[2rem]  font-bold text-blue-500">BOOK</span>
            <div className="flex flex-col justify-center px-2 font-bold h-[60%]">
              <span className="text-blue-400 text-[0.8rem]">
                Listing 
              </span>
              <span className="text-blue-600 text-[0.8rem]">App</span>
            </div>
          </div>
        </Link>
        {/* ---------------log end--------------- */}
      </div>
      {/* search bar start */}
      <div
        id="searchbar"
        className="h-[2rem] mx-2  md:h-[2.5rem] flex justify-center bg-white w-[80%] md:w-[100%] rounded-l-full rounded-r-full">
        <input
          type="text"
          className="h-full w-[80%] rounded-l-full border border-pink-500 outline-none pl-4"
          placeholder="Search book title or author ...."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          onClick={()=>{searchMovie(searchValue)}}
          className=" bg-blue-300 w-[15%] rounded-r-full h-full ">
          <span className="bi bi-search"></span>
        </button>
      </div>
      {/* -------------search bar end? ----------- */}
      <div id="wishlist" className="text-black-500 font-bold mx-4 hidden md:flex">
        <Link to={"/wishlist"}>
          <span className="text-3xl">Favourite</span>
        </Link>
        <span
          id="boot-icon"
          className="bi bi-bookmark-plus text-4xl ml-1 text-blue-500"></span>
      </div>
    </nav>
  );
};

export default Navbar;
