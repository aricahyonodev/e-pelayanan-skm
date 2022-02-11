const Express = require("express");
const Router = Express.Router();
const pengajuanSkmApiController = require("../../../controllers/api/user/pengajuanSkmController");
// Router.get("/selesai", authController.register);
Router.post("/form", pengajuanSkmApiController.form);
Router.get("/menunggu-verifikasi", pengajuanSkmApiController.menungguVerifikasi);
Router.get("/selesai", pengajuanSkmApiController.skmSelesai);

module.exports = Router;
