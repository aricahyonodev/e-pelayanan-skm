const Express = require("express");
const Router = Express.Router();
const superAdminController = require("../../../controllers/api/superAdmin/superaAdmin");

Router.get("/list-user", superAdminController.listUser);
Router.get("/list-admin", superAdminController.listAdmin);
Router.delete("/admin/:id", superAdminController.deleteAdminById);
Router.delete("/user/:id", superAdminController.deleteUserById);
Router.put("/user/:id", superAdminController.updateUserById);
Router.put("/admin/:id", superAdminController.updateAdminById);

module.exports = Router;
