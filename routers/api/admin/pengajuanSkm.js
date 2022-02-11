const Express = require("express");
const Router = Express.Router();
const pengajuanSkmApiController = require("../../../controllers/api/admin/pengajuanSkmController");
// Router.get("/selesai", authController.register);
Router.get("/pengajuan", pengajuanSkmApiController.pengajuan);
Router.get("/pengajuan/:id", pengajuanSkmApiController.pengajuanId);
Router.get("/pengajuan/:id/terima", pengajuanSkmApiController.pengajuanIdTerima);
Router.get("/pengajuan/:id/tolak", pengajuanSkmApiController.pengajuanIdTolak);
Router.get("/riwayat", pengajuanSkmApiController.riwayat);
Router.get("/riwayat/:id", pengajuanSkmApiController.riwayatId);

module.exports = Router;
