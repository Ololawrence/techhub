import { validationResult } from "express-validator/check";

import { config } from "dotenv";

config();
const secret = process.env.SECRET;
/**
 * @class auth
 */
export default class Auth {

  static validateInput(req, res, next) {
    const error = validationResult(req);
    let message;
    error.array().forEach((messages) => {
      message = messages.msg;
    });
    if (!error.isEmpty()) {
      return res.status(422).json({ errors: message });
    }
    next();
  }
}
