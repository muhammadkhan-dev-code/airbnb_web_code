
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
module.exports.createReview= async (req, res) => {
    let listing = await Listing.findById(req.params.id); // find the id
    let newReview = new Review(req.body.review); // get review from body
    newReview.author= req.user._id;
    listing.reviews.push(newReview);
    //   save both in data base
    await newReview.save();
    await listing.save();
    //  res.send("New Review Saved ") ;
    res.redirect(`/listings/${listing._id}`);
  }

   module.exports.destroyReview= async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
  }