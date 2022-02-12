const Express = require("express");
const Router = Express.Router();

const superAdminController = require("../../../controllers/web/superAdmin/superAdminController");
Router.get("/list-user",  superAdminController.listUser);
Router.get("/list-admin", superAdminController.listAdmin);

module.exports = Router;
