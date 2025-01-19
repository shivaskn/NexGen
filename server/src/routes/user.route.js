import express from "express";
import {
  applyForJob,
  getUserData,
  getUserJobApplications,
  updateUserResume,
} from "../controller/user.controller.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/user",getUserData);
router.post("/apply", applyForJob);
router.get("/applications", getUserJobApplications);
router.post("/update-resume", upload.single("resume"), updateUserResume);

export default router;
