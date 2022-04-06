const { Schema, model } = require("mongoose");

const categorieSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 3,
      maxlength: 25,
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      require: [true, "The categorie is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Categorie = model("Categorie", categorieSchema);

module.exports = Categorie;
