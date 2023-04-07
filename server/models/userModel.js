const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxlength: [32, "First name contains too much charactoers"],
    required: [true, "First name is required"],
    validate: {
      validator: (val) => validator.isAlpha(val, ["en-US"], { ignore: " " }),
      message: "First name must only  contain characters",
    },
  },
  lastName: {
    type: String,
    maxlength: [32, "Last name contains too much charactoers"],
    required: [true, "Last name is required"],
    validate: {
      validator: (val) => validator.isAlpha(val, ["en-US"], { ignore: " " }),
      message: "Last name must only  contain characters",
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "This email is registered"],
    lowercase: true,
    validate: [validator.isEmail, "Email is not valid"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password too short"],
    maxlength: [32, "Password is too long"],
    Select: false,
    trim: true,
    validate: {
      validator: function (val) {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
        return !val || !val.trim().length || pattern.test(val);
      },
      message:
        "Password must contain minimum of small letter, capital letter and digits",
    },
  },
  cpassword: {
    type: String,
    required: [true, "Confirmation is required"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Passwords did not matched",
    },
  },
  age: {
    type: Number,
    max: [150, "Age must be 150 or below"],
    required: [true, "Age is required"],
  },
  phone: {
    type: String,
    validate: {
      validator: function (val) {
        const pattern = /^[+]?[0-9]*(?:[0-9]*)$/;
        return !val || !val.trim().length || pattern.test(val);
      },
      message: "Please provide valid phone number",
    },
    required: [true, "User phone number if required"],
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
