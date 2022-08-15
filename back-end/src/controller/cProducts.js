import { default as connection } from "../database.js";
const db = await connection;

export async function getAll() {
	const query = await db.collection("productData").find({}).toArray();
	return query;
}

export async function getByName(name) {
	const query = await db
		.collection("productData")
		.find({ name: { $regex: name } })
		.toArray();
	return query;
}

export async function addProduct(product) {
	const query = await db.collection("productData").insertOne(product);
	return query;
}

export async function removeProducts(filter) {
	console.log(filter);
	const query = await db
		.collection("productData")
		.deleteMany({ _id: { $in: filter } });
	return query;
}
