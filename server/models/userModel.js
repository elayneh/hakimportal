const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    unique: true,
    minlength: 8,
    maxlength: 255,
    Select: false,
    trim: true,
    select: false,
    validate(value) {
      if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        throw new Error(
          "Password must contain at least one letter and one number"
        );
      }
    },
  },
  cpassword: {
    type: String,
    required: [true, "Confirmation required"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      msg: "Passwords did not matched",
    },
  },
  age: {
    type: Number,
    min: 0,
    max: 150,
    required: [true, "Age is required"],
  },
  phone: {
    type: String,
    required: [true, "Please enter the phone number"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    default: "male",
  },
  roles: {
    type: String,
    enum: ["patient", "staff", "admin"],
    default: "patient",
  },

  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  // Only run this function if password is modified
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the password confirm field
  this.cpassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
