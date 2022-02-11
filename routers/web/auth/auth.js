const Express = require("express");
const Router = Express.Router();

const authController = require("../../../controllers/web/auth/authController")
const authenticateSessionAuth = require("../../../module/authenticateSessionAuth"); 
const authUserSession = require("../../../module/authenticateUserSession"); 
Router.get("/", authenticateSessionAuth, authController.login)
Router.get("/daftar", authenticateSessionAuth, authController.register);
Router.get("/keluar", authUserSession, authController.logout);

module.exports = Router;
