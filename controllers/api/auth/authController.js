const User = require('../../../models/user');
const Jwt = require("jsonwebtoken");
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.TOKEN_CRYPTR);

module.exports = {
  login: (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    User.findOne({ email, status : "aktif" }, (err, results) => {
      if (err) {
        res.send({
          message: `Failed to get data`,
          statusCode: 500,
        });
      }

      // Validasi data & compare
      if (!results || password !== cryptr.decrypt(results.password)) {
        res.send({
          message: `username & password salah`,
          statusCode: 200,
        });
      } else {
        const { _id, fullname, email, level } = results;
        const tokenJWT = Jwt.sign(
          {  idUser: _id,fullname, email },
          process.env.TOKEN_SECRET
        );

        const resultData = {
          fullname,
          email,
          level,
          TokenType: "Bearer",
          token: tokenJWT,
        };
        req.session.levelUser = level;
        res.send({
          message: `Login Success`,
          statusCode: 200,
          results: resultData,
        });
      }
    });
  },
  register: (req, res) => {
    const {fullname, email, password} = req.body
    const user = User({
      fullname,
      email,
      password: cryptr.encrypt(password),
    });
    user.save((err, result)=>{
          if (err) {
            res.send({
              message: `Failed to get data`,
              statusCode: 500,
            });
          }
          res.send({
            message: `Register Data Success`,
            statusCode: 200,
          });
    })
  }
};
