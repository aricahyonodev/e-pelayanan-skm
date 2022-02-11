module.exports = (req, res, next) => {
  try {
    if(req.session.levelUser === "user"){
      return next();
    }
    res.redirect("/")
    
  } catch (err) {
    res.redirect("/")
  }
};
