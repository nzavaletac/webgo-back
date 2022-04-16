const { Schema, model } = require("mongoose")

const categorieSchema = new Schema(
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

const Categorie = model("Category", categorieSchema)

module.exports = Categorie
