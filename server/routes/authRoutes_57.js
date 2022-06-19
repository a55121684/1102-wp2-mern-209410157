import express from "express";
import {
  register,
  login,
  updateUser,
} from "../controller/authorController_57.js";
import authenticateUser_57 from "../middleware/auth_57.js";

const router = express.Router();

router.route("/register_57").post(register);
router.route("/login_57").post(login);
router.route("/updateUser_57").patch(authenticateUser_57, updateUser);

export default router;
