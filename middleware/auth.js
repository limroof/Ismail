const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const userId = decodedToken.userID;
    req.auth = {
      userId: userId,
    };
    next();
  } catch (e) {
    console.log(e);
    res.status(401).json({ message: "Unauthorized", status: 401 });
  }
};
