import { default as connection } from "../database.js";
const db = await connection;

export async function getAll() {
	const query = await db.collection("userData").find({}).toArray();
	return query;
}
