const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ message: "Session expired" });
    return;
  }

  const token = authorization.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Session expired" });
    return;
  }

  const { id } = jwt.verify(token, process.env.SECRET);
  req.user = id;
  next();
};
