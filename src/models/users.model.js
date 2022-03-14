const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const letterRegexp = /^[A-Za-z ]+$/;
const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegexp =
  /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 3,
      maxlength: 25,
      match: letterRegexp,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      minlength: 3,
      maxlength: 25,
      match: letterRegexp,
    },
    phoneNumber: {
      type: Number,
      required: [true, "Phone number is required"],
      minlength: 9,
      maxlength: 9,
      match: /^[0-9]+$/,
    },
    city: {
      type: String,
      required: [true, "City is required"],
      match: /^[a-zA-Z0-9 ]+$/,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      minlength: 10,
      maxlength: 50,
      match: emailRegexp,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      match: passwordRegexp,
    },
    events: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Events",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  if (this.password && this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

const User = model("User", userSchema);

module.exports = User;
