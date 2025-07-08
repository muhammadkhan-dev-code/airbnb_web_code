const Listing= require("../models/listing");
const mongoose = require("mongoose");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
// index
module.exports.index= async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }
  module.exports.renderNewForm= (req, res) => {
  res.render("listings/new.ejs");
}
//  create Listing 
module.exports.createListing= async (req, res, next) => {

  let response = await geocodingClient.forwardGeocode({
  query: req.body.listing.location,
  limit: 1
})
  .send();
  // console.log(response.body.features[0].geometry);
  // res.send("Done");

let url= req.file.path;
let filename= req.file.filename;
// console.log("..controller "  , url ," ",filename);    
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.image={url,filename};

    newlisting.geometry=response.body.features[0].geometry;

    let savedListing= await newlisting.save();
    
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  }

//    edit listing 
module.exports.editListing = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      req.flash("error", "Invalid Listing ID.");
      return res.redirect("/listings");
    }
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing You Are Trying To Edit Does Not Exist!");
      return res.redirect("/listings");
    }
let origional_image_url=listing.image.url;
 origional_image_url=origional_image_url.replace("/upload","/upload/w_250");

    res.render("listings/edit.ejs", { listing,origional_image_url });
  }


//    update listing
  module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    req.flash("error", "Invalid Listing ID.");
    return res.redirect("/listings");
  }

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
    req.flash("success", "Listing Updated with new image.");
  } else {
    req.flash("success", "Listing Updated without changing image.");
  }
  res.redirect(`/listings/${id}`);
};


    //  destroy listing 
module.exports.deleteListing= async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      req.flash("error", "Invalid Listing ID.");
      return res.redirect("/listings");
    }

    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  }

//    show listing 
module.exports.showListing= async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      req.flash("error", "Invalid Listing ID.");
      return res.redirect("/listings");
    }

    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");

    if (!listing) {
      req.flash("error", "Listing You Are Trying To Access Does Not Exist!");
      return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
  }