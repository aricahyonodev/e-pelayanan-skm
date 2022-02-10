const Express = require("express");
const Router = Express.Router();
const pengajuanSkmController = require("../../../controllers/web/user/pengajuanSkmController");
Router.get("/pengajuan-skm-form", pengajuanSkmController.form);
Router.get("/pengajuan-skm-menunggu-verifikasi", pengajuanSkmController.menungguVerifikasi);
Router.get("/pengajuan-skm-selesai", pengajuanSkmController.selesai);

module.exports = Router;
