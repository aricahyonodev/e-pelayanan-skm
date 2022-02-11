module.exports = (req, res, next) => {
  try {
    if(req.session.levelUser === "admin"){
      return next();
    }
    res.redirect("/")
    
  } catch (err) {
    res.redirect("/")
  }
};
