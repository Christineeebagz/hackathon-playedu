import {MongoClient, ServerApiVersion} from "mongodb";
import { genNewEntry } from "../api/api.js";

// ATLAS_URI is the connection string to connect the database to server
// change value in config.env when changing connection string
const uri = process.env.ATLAS_URI || "";

// Instance of MongoClient
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

try{
    // connect the client to the server
    await client.connect();

    // notify if successful conncetion
    await client.db("admin").command({ping: 1});
    console.log("Succesfully connected to Database");
}catch(err){
    console.error(err);
}

// connection of the database
let db = client.db("content");
export default db;