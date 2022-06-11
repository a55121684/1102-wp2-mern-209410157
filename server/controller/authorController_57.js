import User_57 from "../models/User_57.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

export const register = async (req, res, next) => {
  console.log("body", req.body);
  const user = await User_57.create(req.body);
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user, token, location: user.location });
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
  console.log("body", req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please provide all value");
  }

  const user = await User_57.findOne({ email }).select("+password");
  console.log("login user", user);
  if (!user) {
    throw new UnAuthenticatedError("invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("invalid Credentials");
  }

  const token = user.createJWT();
  user.password = null;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

export const updateUser = async (req, res) => {
  res.send("Update user -- 游志信, 209410157");
};
