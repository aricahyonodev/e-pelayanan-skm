const Express = require('express');
const App = Express();

// CONFIG
// Static File
App.use(Express.static("public"));
// Template Engine
App.set("view engine", "ejs");

// Router
const PORT = 3000; 
App.listen(PORT, () => {
  console.log(`Express Server Running ${PORT}`);
});
// Router Web
const authRouter = require("./routers/web/auth/auth")
App.use(authRouter)
const pengajuanSKM = require("./routers/web/user/pengajuanSkm");
App.use(pengajuanSKM);
const adminRouter = require("./routers/web/admin/admin");
App.use(adminRouter);

// Routing Debug
const pengajuan = require("./controllers/web/user/pengajuanSkmController")
App.get("/ini/saya", pengajuan.form)