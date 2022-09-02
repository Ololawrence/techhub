import fieldValidator from "../utils/emptyFiled";

 class Validator {
  constructor() {
    this.RegisterValidator = this.RegisterValidator.bind(this);
  }

  RegisterValidator(req, res, next) {
    const emptyFields = fieldValidator.call(
      this.RegisterValidator,
      "register",
      req.body
    );
    if (emptyFields.status === 400) {
      return res.status(400).json({
        status: 400,
        error: emptyFields.error,
      });
    }
    next();
  }
}

export default new Validator();
