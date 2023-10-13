import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTorecentlyview } from "./helper/Store/Slice/RecentlyviewSlice";
import { addTofavourite } from "./helper/Store/Slice/favouriteSlice";
import Loading from "./Loading";
import ReviewForm from "./ReviewForm";

const BookDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isClicked,setClick]=useState(false)
  const [BookDetails, setBookDetails] = useState({});
  const {
    title,
    coverImgLink,
    author,
    isbnNo,
    publisher,
    description,
    review,
  } = BookDetails;
  useEffect(() => {
    getBookDetails();
  }, []);
  const getBookDetails = async () => {
    try {
      let result = await fetch(
        `https://flutrr-booklisting-app.onrender.com/book/${params.id}`
      );
      result = await result.json();
      setBookDetails(result);
      console.log(result);
      dispatch(addTorecentlyview(result));
    } catch (error) {
      alert("Failed in fetching Book details..❗❗");
    }
  };
  const deleteBook = async () => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this Book?"
      );
      if (confirmed) {
        let result = await fetch(
          `https://flutrr-booklisting-app.onrender.com/book/${params.id}`,
          {
            method: "Delete",
          }
        );
        result = await result.json();
        if (result) {
          alert("The Boook is deleted...👍 ✅");
          navigate("/");
        }
      }
    } catch (error) {
      alert("Failed to delete the Book ❗❗❗❗❗❗");
    }
  };

  const calculateAverageRating = () => {
    if (!review || review.length === 0) {
      return 0;
    }
    const totalRating = review.reduce((acc, r) => acc + r.rating, 0);
    return totalRating / review.length;
  };
  const averageRating = calculateAverageRating();

  const submitReview = async (reviewData) => {
    console.log(reviewData)
    try {
      let result = await fetch(`https://flutrr-booklisting-app.onrender.com/book/edit/${params.id}`, {
        method: "put",
        body: JSON.stringify(reviewData),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (result) {
        setClick(false);
        alert("Book review is added Successfully");
        // You can also update your state or do any other necessary actions after a successful review submission.
      }
    } catch (error) {
      alert("Failed to add the Book review❗❗❗❗❗❗");
    }
  };
  
  const closeReviewForm=()=>{
    setClick(false)
  }

  return (
    <div className="w-screen h-screen">
      <Navbar />
      {Object.keys(BookDetails).length > 0 ? (
        <div className="bg-pink-50">
          <div className="w-full h-[12%] items-center flex justify-between px-6">
            <div></div>
            <div>
              <button className="bg-slate-800 border-2 border-blue-600 rounded-xl text-white p-2 mr-1">
                Edit Book ✏️
              </button>
              <button
                onClick={() => deleteBook()}
                className="bg-slate-800 border-2 border-vlue-600 rounded-xl text-white  p-2">
                Delete Book ❌
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row border p-4 ">
            <img
              src={coverImgLink}
              alt="poster"
              className="rounded-md shadow-lg w-[300px] h-[300px] md:w-[25%] md:h-[400px] border border-orange-700 mx-4"
            />
            <div className="flex flex-col justify-between w-1/2">
              <div>
                <h1 className="text-4xl mb-4">{title}</h1>
                <p>
                  By{" "}
                  <span className="font-semibold text-gray-500">{author}</span>
                </p>
                <p>4.5 ⭐ Rating</p>
                <table className="table-fixed mt-6 md:w-2/3">
                  <thead className="pl-0 bg-slate-200 w-full">
                    <tr>
                      <th colSpan="1">Product Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ISBN/ISNC NO</td>
                      <td>{isbnNo}</td>
                    </tr>
                    <tr>
                      <td>Publisher</td>
                      <td>{publisher}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className=" flex justify-between md:w-[40%] w-full mt-3">
                <button
                  onClick={() => {
                    dispatch(addTofavourite(BookDetails));
                    alert(
                      `"${title}" book  is added to myFavourite sucessfully ✅👍`
                    );
                  }}
                  className="bg-green-500 font-semibold rounded-lg border md:p-2 p-1 border-gray-500 mr-2 ">
                  Add to MyFavourite
                </button>
                <button className="bg-yellow-300 border font-semibold rounded-lg md:p-2 p-1 border-gray-500 " onClick={()=>setClick(true)}>
                  Write Review
                </button>
              </div>
            </div>
          </div>
          <div className="px-10 py-4">
            <h1 className="text-xl font-bold underline">Description</h1>
            <p>{description}</p>
          </div>
          <div className="px-10 py-4">
            <h1 className="text-2xl font-bold underline ">Customer Reviews</h1>
            <div className="p-4 my-2 bg-white font-bold italic">
              <p>
                Average Rating ⭐{averageRating.toFixed(1)} {"    "}|{" "}
                {review.length} reviwer
              </p>
              <p>out of (%) reviewers recommend this product</p>
            </div>
            {review.length > 0 ? (
              <div>
                {review.map((reviewItem, index) => (
                  <div key={index}>
                    <h1>{reviewItem.name}</h1>
                    <p>Rating: {reviewItem.rating}</p>
                    <p>{reviewItem.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <h1>no review </h1>
            )}
          </div>
        </div>
      ) : (
        <Loading/>
      )}
      {isClicked && <ReviewForm onSubmit={submitReview} onClose={closeReviewForm} />}
    </div>
  );
};

export default BookDetails;
