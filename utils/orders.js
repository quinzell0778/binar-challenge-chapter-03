const fs = require("fs");

// reading data members
const loadOrders = () => {
	const fileBuffer = fs.readFileSync("data/orders.json", "utf-8");
	const orders = JSON.parse(fileBuffer);
	return orders;
};
module.exports = {
	loadOrders
};