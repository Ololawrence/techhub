import mongoose from "mongoose";
const Register = mongoose.model(
  "Register",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    mobile: Number,
    country: String,
  })
);
export default Register;
