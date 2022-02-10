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
const pengajuanSKM = require("./routers/web/user/pengajuanSKM");
App.use("/pengajuan-SKM", pengajuanSKM);