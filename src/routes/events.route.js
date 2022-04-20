const router = require("express").Router();
const {
  create,
  list,
  show,
  update,
  destroy,
} = require("../controllers/events.controller");
const { auth } = require("../utils/auth");

router.route("/").get(list).post(auth, create);
router.route("/:eventId").get(show).delete(auth, destroy).put(auth, update);

module.exports = router;
