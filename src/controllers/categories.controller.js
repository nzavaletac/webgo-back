const Categorie = require("../models/categories.models");

exports.getCategories = async (req, res) => {
  try {
    Categorie.find().then((categories) => {
      res.json({
        content: categories,
      });
    });
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

exports.postCategories = async (req, res) => {
  try {
    const { body } = req;
    const categorie = await Categorie.create(body);
    res.status(201).json({ message: "Categorie created", categorie });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

exports.putCategories = async (req, res) => {
  const {
    body,
    params: { categorieId },
  } = req;
  try {
    const categorie = await Categorie.findOneAndUpdate(
      { _id: categorieId },
      body,
      {
        new: true,
      }
    );
    if (!categorie) {
      res.status(403).json({ message: "Categorie does not updated" });
      return;
    }
    res.status(201).json({
      message: "Categorie updated",
      categorie,
    });
  } catch (e) {
    res.status(400).json({
      message: "An error has ocurred",
    });
  }
};

exports.deleteCategories = async (req, res) => {
  try {
    const {
      params: { categorieId },
    } = req;
    const categorie = await Categorie.findByIdAndDelete({ _id: categorieId });
    if (!categorie) {
      res.status(403).json({ message: "Unable to delete categorie" });
      return;
    }
    res.status(200).json({ message: "Categorie deleted", categorie });
  } catch (e) {
    res.status(400).json({ message: "An error has ocurred" });
  }
};
