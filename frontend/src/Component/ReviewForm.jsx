import React, { useState } from "react";

const ReviewForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const reviewData = { name, rating, comment };
    onSubmit(reviewData)
    setName("");
    setRating(0);
    setComment("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:bg-slate-300 px-1 rounded-full">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <h2 className="text-xl font-bold">Write a Review</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 mt-2 border rounded-md"
          />
          <label className="block">Rating:</label>
          <div className="w-full flex items-center">
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
              className="w-1/2 p-2 mt-2 border rounded-md"
            />
            <span className="ml-6">{rating}⭐</span>
          </div>
          <textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full p-2 mt-2 border rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 mt-2 rounded-md">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
