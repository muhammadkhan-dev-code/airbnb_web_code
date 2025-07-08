
const User = require("../models/user");
module.exports.renderSignup= (req, res) => {
  res.render("users/signup.ejs");
}
module.exports.renderLogin= (req, res) => {
  res.render("users/login.ejs");
}

module.exports.signup= async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      let registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.login(registeredUser,(err)=>{
        if(err){
          return next(err);
        }
  req.flash("success", "Welcome To our Web Page");
      res.redirect("/listings");
      });
    
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    }
  }



  module.exports.login= async (req, res) => {
    req.flash("success", "Welcome  Back To our Web Page");
let redirectUrl= res.locals.redirectUrl || "/listings"; 

    res.redirect(redirectUrl);
  }


  module.exports.logout= (req,res,next)=>{
  req.logOut((err)=>{
    if(err){
     return next(err); 
    }
    req.flash("success","You are Logged out Successfully");
    res.redirect("/listings" );

  })
}



