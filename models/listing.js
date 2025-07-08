const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const Review= require('./review.js');

//  define schema 
const ListingSchema= new Schema({
    title:{
        type : String,
        required:true,
    },
    description:{
        type : String
    },
    image:{
        url: String,
        filename: String
    },
   price :{
        type: Number
    },
    location:{
        type : String
    },
    country:{
        type : String
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        },
    ],
    owner:{
         type:Schema.Types.ObjectId,
         ref:"User"
    },
   geometry:{
    type:{
        type: String,
        enum:['Point'],
        required:true
    },
    coordinates:{
        type:[Number],
        required:true
    }
   }
});

ListingSchema.post("FindOneAndDelete",async(listing)=>{
if(listing){
await Review.deleteMany({_id:{$in:listing.reviews}});
}
})
//  create a model
 const Listing= mongoose.model("Listing",ListingSchema);

//   export module
module.exports= Listing;

