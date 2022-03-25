const { Router } = require("express");
const auth = require("./middlewares/authMiddleware.js");
const {loadOrders} = require("./utils/orders");
const {loadCars} = require("./utils/cars");


const router = Router();

router.get("/", auth, (req, res) => {
    const orders = loadOrders();
    const cars = loadCars();
    res.render("dashboard", {title: "Dashboard", isValidInput: true, orders, cars});
});

router.get("/cars", auth, (req, res) => {
    res.render("cars", {title: "Cars"});
});
router.get("/cars/add", auth, (req, res) => {
    res.render("new-car", {title: "Cars"});
});
module.exports = router;