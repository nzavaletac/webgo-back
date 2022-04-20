const {
  getCategories,
  postCategories,
  putCategories,
  deleteCategories,
} = require("../controllers/categories.controller")

const router = require("express").Router()

router.route("/").get(getCategories)
router.route("/create").post(postCategories)
router.route("/:categoryId").put(putCategories).delete(deleteCategories)

module.exports = router
