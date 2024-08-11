import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name!"],
    minLength: [3, "Name must contains at least 3 characters !"],
    maxLength: [30, "Name cannot exceed 30 characters !"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email !"],
    validate: [validator.isEmail, "Please provide a valid email !"],
  },
  phone: {
    type: Number,
    required: [true, "Please provide your phone number."],
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minLength: [8, "Password must contains at least 8 characters !"],
    maxLength: [32, "Password cannot exceed 30 characters !"],
  },
  role:{
    type: String,
    required: [true,"Please provide your role !"],
    enum: ["job Seeker", "Employer"],
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
});

