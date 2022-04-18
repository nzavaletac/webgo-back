const router = require("express").Router()
const {
  create,
  list,
  show,
  update,
  destroy,
  listAll,
} = require("../controllers/events.controller")
router.route("/").get(listAll).post(create)
router.route("/:eventId").get(show).delete(destroy).put(update)
router.route("/mylist").get(list)

module.exports = router
