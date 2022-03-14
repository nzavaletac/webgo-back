const router = require("express").Router();
const { signup, update, destroy } = require("../controllers/users.controller");

router.route("/signup").post(signup);
router.route("/:userId").put(update).delete(destroy);

module.exports = router;
