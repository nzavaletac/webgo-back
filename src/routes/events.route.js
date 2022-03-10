const router = require("express").Router()
const {
  create,
  list,
  show,
  update,
  destroy,
} = require("../controllers/events.controller")
router.route("/").get(list).post(create)
router.report("/:eventId").get(show).delete(destroy).put(update)

module.exports = router
