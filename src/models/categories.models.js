const { Schema, model } = require("mongoose")

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: 3,
      maxlength: 25,
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  },
  {
    timestamps: true,
  }
)

const Category = model("Category", categorySchema)

module.exports = Category
