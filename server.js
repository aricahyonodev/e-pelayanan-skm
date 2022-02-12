const Express = require('express');
const App = Express();
const Session = require("express-session");

// CONFIG
// .env
const Dotenv = require("dotenv");
Dotenv.config({ path: "./config/config.env" });
// MongoDB Connection
const DatabaseMongoDB = require("./config/dbConnection");
DatabaseMongoDB();
//Cors
const Cors = require("cors");
App.options("*", Cors());
// File Upload
const FileUpload = require("express-fileupload");
App.use(FileUpload());
// Session
App.use(
  Session({
    secret: "keyboard SKM",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);
// Static File
App.use(Express.static("public"));
// Template Engine
App.set("view engine", "ejs");
// Request JSON
App.use(Express.urlencoded({ extended: true }));
App.use(Express.json())

// Router
const PORT = 3000; 
App.listen(PORT, () => {
  console.log(`Express Server Running ${PORT}`);
});
// Router Web

const authRouter = require("./routers/web/auth/auth")
App.use(authRouter)
const authUserSession = require("./module/authenticateSession"); 
const pengajuanSKM = require("./routers/web/user/pengajuanSkm");
App.use("/pengajuan-skm", authUserSession, pengajuanSKM);
// Admin
const adminRouter = require("./routers/web/admin/admin");
App.use("/home", authUserSession, adminRouter);
// Super Admin
const superAdminRouter = require("./routers/web/superAdmin/superAdmin");
App.use("/home", superAdminRouter);

const authApiRouter = require("./routers/api/auth/auth");
App.use("/api", authApiRouter);
const pengajuanSkmApiRouter = require("./routers/api/user/pengajuanSkm");
const authenticateJwt = require("./module/authenticateJWT"); 
App.use("/api/pengajuan-skm", authenticateJwt, pengajuanSkmApiRouter);
const pengajuanSkmAdmin = require("./routers/api/admin/pengajuanSkm");
App.use("/api/admin/", authenticateJwt, pengajuanSkmAdmin);
const superAdmin = require("./routers/api/superAdmin/superAdmin");
App.use("/api/super-admin/", authenticateJwt, superAdmin);

// Routing Debug
const pengajuan = require("./controllers/web/user/pengajuanSkmController")
App.get("/ini/saya", pengajuan.form)