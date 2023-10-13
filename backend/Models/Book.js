const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  coverImgLink: {
    type: String,
    required: true,
  },
  isbnNo: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  review: [
    {
      name: String,
      rating: Number,
      comment: String,
    },
    
  ],


});
bookSchema.methods.addReview = function (review) {
  this.review.push(review);
  return this.save(); 
};


const Book = mongoose.model('book', bookSchema);

module.exports = Book;