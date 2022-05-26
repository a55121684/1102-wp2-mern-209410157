import User_57 from "../models/User_57.js";
import { StatusCodes } from "http-status-codes";

export const register = async (req, res, next) => {
  console.log("body", req.body);
  const user = await User_57.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user, token });
  // try {
  //   console.log("body", req.body);
  //   const user = await User_57.create(req.body);
  //   const token = user.createJWT();
  //   console.log("token", token);
  //   res.status(201).json({ user, token });
  // } catch (err) {
  //   next(err);
  // }
};

export const login = async (req, res) => {
  res.send("login user -- 游志信, 209410157");
};

export const updateUser = async (req, res) => {
  res.send("Update user -- 游志信, 209410157");
};
