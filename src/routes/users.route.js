const router = require("express").Router();
const {
  signup,
  update,
  destroy,
  signin,
} = require("../controllers/users.controller");

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/:userId").put(update).delete(destroy);

module.exports = router;
