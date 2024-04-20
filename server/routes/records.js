import express from "express";

// connect to database
import db from "../db/connections.js";

// converting string id to object_id for id in database
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
	let collection = await db.collection("games");
	let results = await collection.find({}).toArray();
	res.send(results).status(200);
});

// export async function getData(){
// 	let collection = await db.collection("games");
// 	let results = await collection.find({}).toArray();
// 	return results
// }

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
	// https://localhost:3000/results?param1="keyword1.keyword2.keyword3"
	// keyword
	let collection = await db.collection("games");
	let query = { _id: new ObjectId(req.params.id) };
	let result = await collection.findOne(query);

	if (!result) res.send("Not found").status(404);
	else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
	try {
    	let newDocument = {
    	name: req.body.name,
      	position: req.body.position,
      	level: req.body.level,
    };
    let collection = await db.collection("games");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  	} catch (err) {
    	console.error(err);
    	res.status(500).send("Error adding record");
  	}
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
	try {
    	const query = { _id: new ObjectId(req.params.id) };
    	const updates = {
      		$set: {
        		name: req.body.name,
        		position: req.body.position,
        		level: req.body.level,
      		},
    	};

    	let collection = await db.collection("games");
    	let result = await collection.updateOne(query, updates);
    	res.send(result).status(200);
  	}catch (err) {
    	console.error(err);
    	res.status(500).send("Error updating record");
  	}
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
	try {
    	const query = { _id: new ObjectId(req.params.id) };
    	const collection = db.collection("games");
    	let result = await collection.deleteOne(query);

    	res.send(result).status(200);
  	}catch (err) {
    	console.error(err);
    	res.status(500).send("Error deleting record");
  	}
});

export default router;