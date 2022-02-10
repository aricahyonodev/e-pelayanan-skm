const Express = require("express");
const Router = Express.Router();
const authController = require("../../../controllers/web/auth/authController")
Router.get("/", authController.login)
Router.get("/daftar", authController.register)

module.exports = Router;
