const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization.split(" ");
    const token = authHeader[1];
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    req.idUser = decode.idUser
    return next();
  } catch (err) {
    res.send({
      message: `${req.headers.authorization}`,
      statusCode: 500,
    });
  }
};
