import { MongoClient } from "mongodb";
import mongodb from "mongodb";

const uri = "mongodb+srv://Gauravnv:Gaurav123@cluster0.jpn13.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect().then((c) => {
    return {
      c,
      db: client.db("Projects"),
    };
  });
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
console.log(clientPromise.dbName);
export default clientPromise;
