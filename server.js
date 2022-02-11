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
const authenticateSession = require("./module/authenticateSession"); 
// App.use(authenticateLocalStorage)
const pengajuanSKM = require("./routers/web/user/pengajuanSkm");
App.use("/pengajuan-skm", authenticateSession, pengajuanSKM);
const adminRouter = require("./routers/web/admin/admin");
App.use(adminRouter);

const authApiRouter = require("./routers/api/auth/auth");
App.use("/api", authApiRouter);
const authenticateJwt = require("./module/authenticateJWT"); 
// Routing Debug
const pengajuan = require("./controllers/web/user/pengajuanSkmController")
App.get("/ini/saya", pengajuan.form)