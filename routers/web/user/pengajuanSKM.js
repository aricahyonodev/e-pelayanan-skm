const Express = require("express");
const Router = Express.Router();
const pengajuanSKMController = require("../../../controllers/web/user/pengajuanSKMController");
Router.get("/form", pengajuanSKMController.form);
Router.get("/menunggu-verifikasi", pengajuanSKMController.menungguVerifikasi);
Router.get("/selesai", pengajuanSKMController.selesai);

module.exports = Router;
