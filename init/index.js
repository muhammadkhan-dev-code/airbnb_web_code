const mongoose= require('mongoose');
const init_data = require('./data');
const Listing = require('../models/listing');

//  setup database  connection 
const MONGO_URL= 'mongodb://127.0.0.1:27017/Skoon_stay_DB';
main().then(()=>{
    console.log("connectd to DataBase");
}).catch(err=>
    {
    console.log(err);
})

 async function main() {
    await  mongoose.connect(MONGO_URL);
 }

 const init_DB= async ()=>{
    //  if the data already so clean the data base 
 await Listing.deleteMany({});
//   init_data.data= init_data.map((obj)=>{...obj,owner:'68555d41d5dc19d2dd237cb2'})
//   and add new Data in data base 
 await Listing.insertMany(init_data.data);
 console.log("Data Was initialized ")
 }

 init_DB();