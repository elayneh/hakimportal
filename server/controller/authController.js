const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    cpassword: req.body.cpassword,
    age: req.body.age,
    phone: req.body.phone,
    gender: req.body.gender,
  });

  const userFields = [
    "firstName",
    "lastName",
    "email",
    "password",
    "cpassword",
    "age",
    "phone",
    "gender",
  ];
  try {
    await newUser.save();
    const token = signToken(newUser._id);
    res.status(200).send({
      newUser,
      token,
    });
  } catch (e) {
    {
      const foundErrors = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: "",
        age: "",
        phone: "",
        gender: "",
      };
      userFields.forEach((field) => {
        if (e.errors[field]) {
          foundErrors[e.errors[field].path] = e.errors[field].message
          // foundErrors.push(e.errors[field].path);
        }
      });
      // console.log(foundErrors.field)
      console.log("found", foundErrors);

      res.status(400).send({ errors: foundErrors });
    }
  }
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // Check if user exists and password is correct
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError("Incorrect email or password", 401));

  // If every thing is  ok, send token to client
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
});
