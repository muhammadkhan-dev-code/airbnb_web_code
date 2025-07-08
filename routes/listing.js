const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const multer= require("multer");
const {storage}= require("../cloudConfig.js");

const upload= multer({storage});

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listController = require("../controllers/con_listings.js");
// 1. NEW route
router.get("/new", isLoggedIn, listController.renderNewForm);

router
  .route("/")
  .get(wrapAsync(listController.index)) // 2. INDEX route
  .post( isLoggedIn,upload.single('listing[image]'), validateListing
     ,wrapAsync(listController.createListing)); // 3. CREATE route
  //  4. EDIT route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listController.editListing)
);

router
  .route("/:id") //  5. UPDATE route
  .put(
    isLoggedIn,
    isOwner,upload.single('listing[image]'),
     validateListing,
    wrapAsync(listController.updateListing)
  )
  .delete( isLoggedIn, isOwner, wrapAsync(listController.deleteListing)) //  6. DELETE route
  .get(wrapAsync(listController.showListing)); // 7. SHOW route

module.exports = router;
