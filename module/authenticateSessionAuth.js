module.exports = (req, res, next) => {
  try {
    if(!req.session.token){
      return next();
    }
    res.redirect("/pengajuan-skm/form")
    
  } catch (err) {
    res.redirect("/pengajuan-skm/form");
  }
};
