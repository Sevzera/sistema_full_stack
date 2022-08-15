import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();

let connection;
async function connect() {
	if (!connection) {
		await MongoClient.connect(process.env.DB_URL).then((client, err) => {
			if (err) console.log(err);
			else connection = client.db(process.env.DB_NAME);
		});
	}
	return connection;
}

export default connect();
