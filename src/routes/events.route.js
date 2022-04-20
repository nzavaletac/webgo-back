const router = require("express").Router();
const {
  create,
  list,
  show,
  update,
  destroy,
  listAll,
} = require("../controllers/events.controller");
const { auth } = require("../utils/auth");

router.route("/").get(listAll).post(auth, create);
router.route("/:eventId").get(show).delete(auth, destroy).put(auth, update);
router.route("/mylist").get(auth, list);

module.exports = router;
