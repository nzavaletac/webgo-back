require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { connect } = require("./database");
const userRouter = require("./routes/users.route");
const eventRouter = require("./routes/events.route");
const categoriesRouter = require("./routes/categories.route");
const { auth } = require("./utils/auth");


const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(express.json({ limit: "100mb" }))
app.use(cors())
app.use(morgan("dev"));

app.get("/", auth, (req, res) => {
  console.log(req.user);
  res.status(200).json({
    message: "It´s working",
  });
});

app.use("/users", userRouter)
app.use("/events", eventRouter)
app.use("/categories", categoriesRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
