import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesfromDb } from "./helper/Store/Slice/movieSlice";
import { addMasterFromDb } from "./helper/Store/Slice/masterMovieData";
import Loading from "./Loading";

const Homepage = () => {
  // const [movieData, upadateMovie] = useState([])
  const [LoadingOn, setOn] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movie);
  const masterData = useSelector((store) => store.masterData);
  // console.log(data)
  useEffect(() => {
    getMovieFromDB();
  }, []);



  // get all data from database 
  const getMovieFromDB = async () => {
    try {
      setOn(true);
      const result = await fetch("https://movier-app.onrender.com/");
      const allData = await result.json();

      console.log(allData);
      // upadateMovie(allData)
      if (allData) {
        setOn(false);
        dispatch(addMoviesfromDb(allData));
        dispatch(addMasterFromDb(allData));
      }
    } catch (error) {
      console.log("Something went wrong while data fetching");
    }
  };

  return (
    <div className=" flex flex-col">
     
      {LoadingOn && <Loading />}
      {movieData.length > 0 ? (
        <section className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-auto">
          {movieData?.map((movie) => {
            return <MovieCard movie={movie} key={movie?._id} />;
          })}
        </section>
      ) : (
        !LoadingOn && (
          <h1 className="text-4xl font-bold mt-2">
            No movie Record is found ..🫡🫠
          </h1>
        )
      )}
    </div>
  );
};

export default Homepage;
