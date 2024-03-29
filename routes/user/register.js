const User = require("../../models/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { RegisterValidation } = require("../../utils/RegisterValidation");
require("dotenv").config()
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PWD = process.env.ADMIN_PWD;
module.exports = async (req, res) => {
  try {
    let { email, password, userName, confirm_password } = req.body;
    console.log(req.body);
    let { error } = await RegisterValidation({
      email,
      password,
      confirm_password,
      userName,
    });
    if (error) {
      return res
        .status(401)
        .json({ status: false, error: error.details[0].message });
    }
    let existedUser = await User.find({ $or: [{ email }, { userName }] });
    if (existedUser.length !== 0) {
      return res.status(401).json({
        status: false,
        existedEmailError:
          "User is already exist, please try another email or username",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    let newUser = new User({
      email,
      password: hashedPassword,
      userName,
    });
    const user = await newUser.save();
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: ADMIN_EMAIL,
        pass: ADMIN_PWD,
      },
    });
    const output = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Document</title>
  </head>
  <body>
    <style></style>
    <h1 style="color: #8a2be2; font-size: 1.2rem; font-weight: 700">
      Welcome ${userName}
    </h1>
    <h2 style="color: #9932cc">Your acount has been created successfully</h2>
    <h4>One more step, please click the link below to verify your email</h4>
    <a href="http://localhost:3000/verify-email-user" taget="_blank">Verify your account</a>
  </body>
</html>
`;
    const mailOptions = {
      from: '"My Library" <gmcws@outlook.com>"',
      to: email,
      subject: "Please verify your email",
      html: output,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json({
      status: true,
      message: "Your account has been created successfully",
      data: user,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error });
  }
};
