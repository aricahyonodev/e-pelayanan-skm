const Express = require("express");
const Router = Express.Router();
const pengajuanSkmController = require("../../../controllers/web/user/pengajuanSkmController");

Router.get("/form", pengajuanSkmController.form);
Router.get("/menunggu-verifikasi", pengajuanSkmController.menungguVerifikasi);
Router.get("/selesai", pengajuanSkmController.selesai);

module.exports = Router;
