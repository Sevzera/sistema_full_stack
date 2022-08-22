import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

import { default as rUsers } from "./routes/rUsers.js";
import { default as rProducts } from "./routes/rProducts.js";

export const server = async () => {
	const server = express();
	server.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "*");
		res.header("Access-Control-Allow-Methods", "*");
		next();
	});
	server.use(express.json());

	server.use("/api/users", rUsers);
	server.use("/api/products", rProducts);

	const port = process.env.PORT || 2000;
	server.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
};

server();
