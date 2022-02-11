const Express = require("express");
const Router = Express.Router();

const authController = require("../../../controllers/web/auth/authController")
const authenticateSessionAuth = require("../../../module/authenticateSessionAuth"); 
const authenticateSession = require("../../../module/authenticateSession"); 
Router.get("/", authenticateSessionAuth, authController.login)
Router.get("/daftar", authenticateSessionAuth, authController.register);
Router.get("/keluar", authenticateSession, authController.logout);

module.exports = Router;
