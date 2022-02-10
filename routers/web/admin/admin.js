const Express = require("express");
const Router = Express.Router();
const adminController = require("../../../controllers/web/admin/adminController");
Router.get("/pengajuan", adminController.pengajuan);
Router.get("/riwayat", adminController.riwayat);

module.exports = Router;
