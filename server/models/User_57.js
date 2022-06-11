import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema_57 = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name"],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email ",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide password"],
    minLength: 6,
    selected: false,
  },
  lastName: {
    type: String,
    maxLength: 30,
    default: "lastName",
    trim: true,
  },
  location: {
    type: String,
    maxLength: 30,
    default: "my city",
    trim: true,
  },
});

UserSchema_57.pre("save", async function () {
  console.log("password", this.password);
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema_57.methods.createJWT = function () {
  console.log("this", this);
  return jwt.sign(
    {
      userId: this._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

UserSchema_57.methods.comparePassword = async function (password) {
  console.log("test");
  const isMatch = await bcrypt.compare(password, this.password);

  return isMatch;
};

export default mongoose.model("User_57", UserSchema_57);
