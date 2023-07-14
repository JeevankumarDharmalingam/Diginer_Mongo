import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://rvr28111986:SVzP4Re9va4D7I2w@cluster0.6z1mjob.mongodb.net?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;