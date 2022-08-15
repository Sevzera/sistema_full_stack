import express from "express";
import * as control from "../controller/cProducts.js";
const router = express.Router();

router.get("/", async (req, res) => {
	const result = await control.getAll(req, res);
	const data = JSON.stringify(result);
    res.send(data);
});

router.get("/:name", async (req, res) => {
	const result = await control.getByName(req.params.name);
	const data = JSON.stringify(result);
    res.send(data);
});

router.post("/add", async (req, res) => {
	if (!req.body.name) {
		res.send({ status: false, message: "Name is required" });
	}
	const product = {
		name: req.body.name,
		quantity: req.body.quantity || 0,
		price: req.body.price || 0,
	};
	const data = await control.addProduct(product);
	if (data.acknowledged) {
		res.send({ status: true, message: product.name + " added" });
	} else {
		res.send({ status: false, message: "Failed to add " + product.name });
	}
});

router.delete("/remove", async (req, res) => {
    const filter = req.body;
	const data = await control.removeProducts(filter);
	if (data.acknowledged) {
		res.send({ status: true, message: data.deletedCount + " products removed" });
	} else {
		res.send({ status: false, message: "Failed to remove products"});
	}
});

export default router;
