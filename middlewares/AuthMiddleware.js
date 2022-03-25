const auth = (req, res, next) => {
    const token = req.app.locals.token;
    if(!token) return res.render("login", {title: "Log In", isValidInput: true});
    else return next();
}

module.exports = auth;