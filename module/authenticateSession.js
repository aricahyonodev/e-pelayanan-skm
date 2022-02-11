module.exports = (req, res, next) => {
  try {
    if(req.session.token){
      return next();
    }
    res.redirect("/")
    
  } catch (err) {
    res.redirect("/")
  }
};
