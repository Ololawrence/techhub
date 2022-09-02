import db from "../Models/index";
const Register = db.Register;

export default class findExisting {
  static async existingMobile(req, res, next) {
    const { mobile } = req.body;
    const isExist = await Register.findOne({ mobile });

    try {
      if (isExist) {
        return res.status(409).json({
          status: 409,
          error: "useer with this phone number already exist",
        });
      }
      next();
    } catch (error) {
      if (error) {
        res.json(err.message);
      }
    }
  }

  static async existingEmail(req, res, next) {
    const { email } = req.body;
const emailExist = await Register.findOne({email});
try {
     if (emailExist) {
          return res.status(409).json({
            status: 409,
            error: "Email Unavailable, please choose a new email address",
          });
        }
        next();
      } catch (error) {
     res.json(err.message);
}
}

}


