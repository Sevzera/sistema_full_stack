import express from "express";
import * as control from "../controller/cProducts.js";
const router = express.Router();

router.get("/", async (req, res) => {
	const result = await control.getAll();

	result
		? res.json({ status: true, data: result })
		: res.json({ status: false, message: "No products found" });
});

router.patch("/name", async (req, res) => {
	const name = req.body.name;
	const result = await control.getByName(name);

	result
		? res.json({ status: true, data: result })
		: res.json({ status: false, message: "Product not found" });
});

router.post("/add", async (req, res) => {
	if (!req.body.name) {
		res.json({ status: false, message: "Name is required" });
	}
	const product = {
		name: req.body.name,
		quantity: req.body.quantity || 0,
		price: req.body.price || 0,
	};
	const data = await control.addProduct(product);

	data.acknowledged
		? res.json({ status: true, message: product.name + " added" })
		: res.json({ status: false, message: "Failed to add " + product.name });
});

router.delete("/remove", async (req, res) => {
	const filter = req.body;
	const data = await control.removeProducts(filter);

	data.acknowledged
		? res.json({
				status: true,
				message: data.deletedCount + " products removed",
		  })
		: res.json({ status: false, message: "Failed to remove products" });
});

export default router;
