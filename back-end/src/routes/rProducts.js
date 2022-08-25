import express from "express";
import * as control from "../controller/cProducts.js";
const router = express.Router();

router.get("/", async (req, res) => {
	const result = await control.getAll();

	result
		? res.json(result)
		: res.json("No products found");
});

router.patch("/name", async (req, res) => {
	const name = req.body.name;
	const result = await control.getByName(name);

	result
		? res.json(result)
		: res.json("Product not found");
});

router.post("/add", async (req, res) => {
	if (!req.body.name) {
		res.json("Name is required");
	}
	const product = {
		name: req.body.name,
		quantity: req.body.quantity || 0,
		price: req.body.price || 0,
	};
	const result = await control.addProduct(product);

	result.acknowledged
		? res.json(product.name + " added")
		: res.json("Failed to add " + product.name);
});

router.delete("/remove", async (req, res) => {
	const filter = req.body;
	const result = await control.removeProducts(filter);

	result.acknowledged
		? res.json(result.deletedCount + " products removed")
		: res.json("Failed to remove products");
});

export default router;
