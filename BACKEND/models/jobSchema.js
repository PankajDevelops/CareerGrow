import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide job title"],
    minLength: [3, "Job titile must contains at least 3 characters"],
    maxLength: [50, "Job titile cannot exceed 50 characters"]
  },
  description: {
    type: String,
    required: [true, "Please provide job description"],
    minLength: [50, "Job description must contains at least 50 characters"],
    maxLength: [350, "Job description cannot exceed 350 characters"]
  },
  category: {
    type: String,
    required: [true, "Job category is required"]
  },
  country: {
    type: String,
    required: [true, "Job country is required"]
  },
  city: {
    type: String,
    required: [true, "Job city is required"]
  },
  location: {
    type: String,
    required: [true, "Job location is required"],
    minLength: [50, "Job location must contains at least 50 characters"]
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Fixed salary must contains at least 4 digits"],
    maxLength: [9, "Fixed salary cannot exceed 9 digits"]
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "salaryFrom must contains at least 4 digits"],
    maxLength: [9, "salaryFrom cannot exceed 9 digits"]
  },
  salaryTo: {
    type: Number,
    minLength: [4, "StartingTo must contains at least 4 digits"],
    maxLength: [9, "StartingTo cannot exceed 9 digits"]
  },
  expired: {
    type: Boolean,
    default: false
  },
  jobPostedOn: {
    type: Date,
    default: Date.now
  },
  postedBy:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  }
});

export const Job = mongoose.model("Job",jobSchema);
