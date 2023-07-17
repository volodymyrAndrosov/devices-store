const jwt = require("jsonwebtoken");

module.exports = role => (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; //Bearer  asdasdasdasd

    if (!token) {
      return res.status(401).json({ message: "not authorized" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.role !== role) {
      return res
        .status(403)
        .json({ message: "you dont have permission for this action" });
    }
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: "not authorized" });
  }
};
