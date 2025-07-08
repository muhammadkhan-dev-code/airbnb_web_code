if(process.env.NODE_ENV !="production"){
require("dotenv").config(); 

}

const express= require('express');
const app= express();
const mongoose= require('mongoose');
const methodOverride = require('method-override');
const ejsMate =require('ejs-mate');
const session= require('express-session');
const MongoStore = require('connect-mongo');
const flash= require('connect-flash');
const User= require('./models/user.js');
const LocalStrategy = require('passport-local').Strategy;

const listingRouter= require("./routes/listing.js");
const reviewRouter= require("./routes/review.js");
const userRouter= require("./routes/user.js");

//  setup ejs 
const path = require('path');
const passport = require('passport');
//  setup database  connection 
//  const MONGO_URL= 'mongodb://127.0.0.1:27017/Skoon_stay_DB';
 const DATABASE_URL= process.env.ATLASDB_URL;
 
main().then(()=>{
    console.log("connectd to DataBase");
}).catch(err=>
    {
    console.log(err);
})

 async function main() {
    await  mongoose.connect(DATABASE_URL);
 }

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"/public")));

//  session store code
const store=MongoStore.create({
  mongoUrl:DATABASE_URL,
  crypto:{
    secret:process.env.SECRET,
  },
  touchAfter: 24*3600,
});

store.on("error",()=>{
  console.log("Error in   Mongo Session  Store",err);
})

//  define session options 
const sessionOptions= {
  store,
  secret:process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires:Date.now()+7*24*60*60*1000,
    maxAge: 7*24*60*60*1000,
  httpOnly:true,
  },
};


//  use before routes 
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// create middleware 
app.use((req,res,next)=>{
  res.locals.success= req.flash("success");
  res.locals.error= req.flash("error");
  res.locals.currentUser=req.user;
  next();

})
 
// listings 
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter)




  // CREATE MIDDLEWARE TO HANDLE ERROR
  app.use((err,req,res,next)=>{
     const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("listings/error.ejs",{message}); // res.status(statusCode).send(message);
  });

app.listen(3000,()=>{
console.log(`Server is Listening to  port 3000`);
});

