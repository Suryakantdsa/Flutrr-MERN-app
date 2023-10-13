import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const AddMovie = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImgLink: "",
    publisher: "",
    isbnNo: "",
  });
  // console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if all input fields are filled
    if (
      formData.title.trim() === "" ||
      formData.author.trim() === "" ||
      formData.description.trim() === "" ||
      formData.coverImgLink.trim() === "" ||
      formData.publisher.trim() === "" ||
      formData.isbnNo.trim() === ""
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    // Validate the cover image URL
    const isCoverImgValid = /^https?:\/\/[^\s/$.?#].[^\s]*$/.test(
      formData.coverImgLink
    );
    if (!isCoverImgValid) {
      alert("Please enter a valid cover image URL.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://movier-app.onrender.com/addmovie",
        {
          ...formData,
        }
      );
      console.log(response.data);
      // Reset the form data or redirect to another page
      alert("Book data is added successfully 👍👍");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error("Error adding movie:", error);
      alert("Error adding Book:", error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-pink-200 h-screen">
        <div className="w-full sm:w-[500px] rounded-lg mt-0">
          <fieldset className=" p-4 m-2 border-2 border-blue-400">
            <legend className="text-2xl font-semibold">Add New Book</legend>
            <div className="flex justify-between">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 mb-3 mr-2 rounded-md border focus:outline-none focus:border-blue-400"
              />
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                className="w-full p-2 mb-3 rounded-md border focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                name="coverImgLink"
                placeholder=" Paste Cover photo Link"
                value={formData.coverImgLink}
                onChange={handleChange}
                className="w-full p-2 mb-3 rounded-md border focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                name="publisher" 
                placeholder="Publisher name"
                value={formData.publisher}
                onChange={handleChange}
                className="w-full p-2 mb-3 rounded-md border focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                name="isbnNo"
                placeholder="ISBN-13 (eg: 9781847941831)"
                value={formData.isbnNo}
                onChange={handleChange}
                className="w-full p-2 mb-3 rounded-md border focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="mb-4">
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                onChange={handleChange}
                placeholder="Write a short description...!"
                className="w-full p-2 rounded-md border focus:outline-none focus:border-blue-400"
              />
            </div>
          </fieldset>
          <button
            onClick={handleSubmit} // Removed the () here
            className="bg-blue-600 hover:bg-blue-700 ml-2 text-white font-semibold px-4 py-2 rounded-md focus:outline-none">
            Add Book
          </button>

          {isLoading && <Loading />}
        </div>
      </div>
    </>
  );
};

export default AddMovie;
