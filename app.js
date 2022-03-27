const express = require("express");
const routes = require("./routes")
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");

const upload = multer();
const validation = require("./utils/loginValidation");
const res = require("express/lib/response");

const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use("/", routes);
app.use("/public", express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('public'));

app.post('/login', function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    if (validation.isValidPassword(password) && validation.isValidEmail(email)) {
        req.app.locals.token = "token123";
        res.redirect("/");
    }
    else{
        res.render("login", {title: "Log In", isValidInput: false})
    }
});

// app.get("/cars", (req, res) => {
//     res.render("cars", {title: "Cars"});
// });

app.listen(port, () => console.log(`Server running on port ${port}`));