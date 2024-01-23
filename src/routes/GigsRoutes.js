import multer from "multer";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import 
{ addGig, 
  getUserAuthGigs,
  editGig,
  getGigData,
  searchGigs,
  addReview,
  checkGigOrder, } from "../controllers/GigsController.js";
import { Router } from "express";

export const gigsRoutes = Router();
const upload = multer({ dest:"uploads/" });

gigsRoutes.post("/add", verifyToken, upload.array("images"), addGig)
gigsRoutes.get("/get-user-gigs", verifyToken, getUserAuthGigs);
gigsRoutes.get("/get-gig-data/:gigId", getGigData);
gigsRoutes.put("/edit-gig/:gigId", verifyToken, upload.array("images"), editGig);
gigsRoutes.get("/search-gigs", searchGigs);
gigsRoutes.post("/add-review", verifyToken, addReview);
gigsRoutes.get("/check-gig-order/:gigId", verifyToken, checkGigOrder);
gigsRoutes.post("/add-review/:gigId", verifyToken, addReview);