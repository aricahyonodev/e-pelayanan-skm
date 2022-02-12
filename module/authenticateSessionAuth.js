module.exports = (req, res, next) => {
  try {
    console.log(req.session.levelUser);

    switch (req.session.levelUser) {
      case "user": return res.redirect("/pengajuan-skm/form");
      case "admin": return res.redirect("/home/pengajuan");
      case "super admin": return res.redirect("/home/list-admin");
      default:
        return next();
    }
    // if(!req.session.levelUser === "user"){
    //   return res.redirect("/pengajuan-skm/form")
    // }
    
    
  } catch (err) {
    res.redirect("/pengajuan-skm/form");
  }
};
