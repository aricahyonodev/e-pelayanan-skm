const Express = require("express");
const Router = Express.Router();
const authController = require("../../../controllers/api/auth/authController");
Router.post("/login", authController.login);
Router.post("/register", authController.register);

module.exports = Router;
