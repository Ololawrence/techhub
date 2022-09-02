import express from "express";
import RegisterControllers from "../Controllers/Register.js";
import validator from "../validator/inputValidator";
import helpers from "../helpers/validateInput";
import Validators from "../validator/validator";
import findExisting from './../Middleware/existingUser';
const router = express.Router();


const {RegisterInputValidator} = Validators;
const { RegisterValidator } = validator;
const { validateInput } = helpers;
const {existingMobile, existingEmail} = findExisting;
const { Register, FindAll, getAllMobile } = RegisterControllers;



router.post(
  "/auth/register",
   RegisterValidator,
  RegisterInputValidator,
  validateInput,
   existingEmail,
   existingMobile,
  Register
);
router.get('/getall/user', FindAll );
router.get("/getall/mobile", getAllMobile);
export default router;
