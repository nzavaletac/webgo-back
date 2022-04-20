const { Schema, model } = require("mongoose")
const letterRegexp = /^[A-Za-z0-9\s]+$/

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The title is required"],
      trim: true,
      minlength: 3,
      maxlength: 150,
      match: letterRegexp,
    },
    location: {
      type: Array,
      default: [],
      required: [true, "The location is required"],
    },
    image: {
      type: String,
      required: [true, "The image is required"],
    },
    date: {
      type: Date,
      required: [true, "The date is required"],
    },
    description: {
      type: String,
      required: [true, "The description is required"],
      maxlength: 150,
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
    categories: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Category",
        },
      ],
    },
  },
  {
    timestamps: true,
  }

)
const Event = model("Event", eventSchema)
module.exports = Event
