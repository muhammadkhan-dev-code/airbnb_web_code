 const Listing= require("./models/listing");
 const { listingSchema,reviewSchema } = require('./schema.js');
 const ExpressError = require('./utils/ExpressError.js');
 const Review = require("./models/review.js");

 module.exports.isLoggedIn=(req,res,next)=>{

     if (!req.isAuthenticated()) {
      // redirect url 
      req.session.redirectUrl=req.originalUrl
    req.flash("error", "You must be LoggedIn to create New Listings");
    return res.redirect("/login"); 
  }
  next();
 };
 
 module.exports.saveRedirectUrl= (req,res,next)=>{
  if(req.session.redirectUrl){
    //  save redirect url in locals 
    res.locals.redirectUrl= req.session.redirectUrl ; 
   
  }
   next(); 
 }

 module.exports.isOwner=  async (req,res,next)=>{
  let {id}= req.params;
  let listing= await  Listing.findById(id);
  if(!listing.owner._id.equals( res.locals.currentUser._id)){
 req.flash("error","You Are Not the Owner of this Listings  ");
  return  res.redirect(`/listings/${id}`);
  }
next(); 
 }

 // Middleware to validate listing schema
 module.exports.validateListing = (req, res, next) => {
   let { error } = listingSchema.validate(req.body);
   if (error) {
     let errmsg = error.details.map((el) => el.message).join(",");
     throw new ExpressError(400, errmsg);
   } else {
     next();
   }
 };

 module.exports.validateReview=(req,res,next)=>{
   let {error}= reviewSchema.validate(req.body);
     if(error){
       let errmsg=error.details.map((el)=>el.message).join(",");
       throw new ExpressError(400,errmsg);
     }
     else
     {
       next();
     }
 }



//  review Author middle ware 
 module.exports.isAuthor=  async (req,res,next)=>{
  let {reviewId,id}= req.params;
  let review= await Review.findById(reviewId);
  if(!review.author._id.equals( res.locals.currentUser._id)){
 req.flash("error","You Are Not the Author of this Review   ");
  return  res.redirect(`/listings/${id}`);
  }
next(); 
 }
 