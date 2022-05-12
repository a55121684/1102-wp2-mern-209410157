import express from "express";
import {
  register,
  login,
  updateUser,
} from "../controller/authorController_57.js";

const router = express.Router();

router.route("/register_57").post(register);
router.route("/login_57").post(login);
router.route("/updateuser_57").post(updateUser);

export default router;
