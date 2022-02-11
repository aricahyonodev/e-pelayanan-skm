module.exports = {
    login : (req, res) =>{
        res.render("auth/login")
    },
    register : (req, res) =>{
        res.render("auth/register")
    },
    logout:(req, res)=>{
        req.session.destroy((err) => {
        res.redirect("/");
        });
    }
}