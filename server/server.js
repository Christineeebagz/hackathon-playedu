import express from "express";
import cors from "cors";
import records from "./routes/records.js";

// connect to database
import db from "./db/connections.js";

// api for generation
import { genNewEntry } from "./api/api.js";


const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/records", records);

app.get('/api/data', async (req, res) => {
    // Process the request, fetch data, etc.
    const filter = req.query.param1 || "";
    const query = {topic: filter};
    let collection = await db.collection("games");
	let results = await collection.find(query).toArray();
    if(!results) res.send("Not found").status(404);
	res.json(results).status(200);
});

app.post("/api/post", async (req, res) => {

    const jsonInput = req.body;
    const newDocument = genNewEntry(jsonInput.topic, jsonInput.categories);
	try {
    	let newDocument = {
        title: "Test Game 1",
        description: "Sample Description 1",
        info: "Sample Info",
        topic: "Sample topic",
        keywords: "Sample Param",
        upvotes: 0,
        downvotes: 0

    };
    let collection = await db.collection("games");
    // let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  	} catch (err) {
    	console.error(err);
    	res.status(500).send("Error adding record");
  	}
});

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
