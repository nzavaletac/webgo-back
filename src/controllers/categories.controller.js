const Category = require("../models/categories.models")

exports.getCategories = async (req, res) => {
  try {
    Category.find().then((categories) => {
      res.json({
        content: categories,
      })
    })
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong",
    })
  }
}

exports.postCategories = async (req, res) => {
  try {
    const { body } = req
    const category = await Category.create(body)
    res.status(201).json({ message: "Category created", category })
  } catch (e) {
    res.status(400).json({ error: e })
  }
}

exports.putCategories = async (req, res) => {
  const {
    body,
    params: { categoryId },
  } = req
  try {
    const category = await Category.findOneAndUpdate(
      { _id: categoryId },
      body,
      {
        new: true,
      }
    )
    if (!category) {
      res.status(403).json({ message: "Category does not updated" })
      return
    }
    res.status(201).json({
      message: "Category updated",
      category,
    })
  } catch (e) {
    res.status(400).json({
      message: "An error has ocurred",
    })
  }
}

exports.deleteCategories = async (req, res) => {
  try {
    const {
      params: { categoryId },
    } = req
    const category = await Category.findByIdAndDelete({ _id: categoryId })
    if (!category) {
      res.status(403).json({ message: "Unable to delete category" })
      return
    }
    res.status(200).json({ message: "Category deleted", category })
  } catch (e) {
    res.status(400).json({ message: "An error has ocurred" })
  }
}
