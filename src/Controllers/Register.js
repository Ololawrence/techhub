import db from "../Models/index";
const Register = db.Register;

export default class RegisterControllers {
  static Register(req, res) {
    const { firstname, lastname, email, country } = req.body;
    let mobile = Number(req.body.mobile);

    const User = new Register({
      firstname,
      lastname,
      email,
      mobile,
      country,
    });

    try {
      User.save((err, user) => {
        if (err) {
          res.status(500).json({ message: err.message });
          return;
        }
        return res.status(201).json({
          message: "user successfully created",
          payload: user,
        });
      });
    } catch (error) {
      if (error) {
        return res.status(500).json({
          message: error,
        });
      }
    }
  }

  static async FindAll(req, res) {
    const findAll = await Register.find();

    if (!findAll) {
      res.status(400).json({
        message: "no records in the database",
      });
      return;
    }

    res.status(200).json({
      payload: findAll,
    });
  }

  static async getAllMobile(req,res) {
    const numbers = await Register.find();
       if (!numbers) {
         res.status(400).json({
           message: "no records in the database",
         });
         return;
       }

       res.status(200).json({
        payload:number
  })

  }
}
