const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")

const letterRegexp = /^[A-Za-z ]+$/
const titleRegexp =
  /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{3,25}$/
const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The title is required"],
      trim: true,
      minlength: 3,
      maxlength: 25,
      match: titleRegexp,
    },
    location: {
      type: String,
      required: [true, "The location is required"],
      minlength: 3,
      maxlength: 25,
      match: letterRegexp,
    },
    image: {
      type: String,
      required: [true, "The image is required"],
    },
    date: {
      type: String,
      required: [true, "The date is required"],
    },
    description: {
      type: String,
      required: [true, "The description is required"],
      maxlength: 50,
      trim: true,
    },
    publicity: {
      type: Boolean,
      default: false,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: [true, "The creator's ID is required"],
    },
  },
  {
    timestamps: true,
  }
)

const Event = model("Event", eventSchema)

module.exports = Event
