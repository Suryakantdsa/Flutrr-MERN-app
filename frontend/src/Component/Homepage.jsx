import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMasterFromDb } from "./helper/Store/Slice/masterBookData";
import Loading from "./Loading";
import { addBooksfromDb } from "./helper/Store/Slice/bookSlice";
import BookCard from "./BookCard";

const Homepage = () => {
  const [LoadingOn, setOn] = useState(false);
  const dispatch = useDispatch();
  const bookData = useSelector((store) => store.book);
  useEffect(() => {
    getBookFromDB();
  }, []);

  // get all data from database 
  const getBookFromDB = async () => {
    try {
      setOn(true);
      const result = await fetch("https://flutrr-booklisting-app.onrender.com/");
      const allData = await result.json();

      console.log(allData);
      if (allData) {
        setOn(false);
        dispatch(addBooksfromDb(allData));
        dispatch(addMasterFromDb(allData));
      }
    } catch (error) {
      console.log("Something went wrong while data fetching");
    }
  };

  return (
    <div className=" flex flex-col pb-9 w-full align-center">
     
      {LoadingOn && <Loading />}
      {bookData.length > 0 ? (
        <section className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-auto">
          {bookData?.map((book) => {
            return <BookCard book={book} key={book?._id} />;
          })}
        </section>
      ) : (
        !LoadingOn && (
          <div className="mr-[300px]">
          <h1 className="text-4xl font-bold mt-4 text-center">
            No book Record is found ..🫡🫠
          </h1>
          </div>
        )
      )}
    </div>
  );
};

export default Homepage;
