const fs = require("fs");

let uniqid = require("uniqid");

//routes
module.exports = (app) => {
	app.get("/api.nptes", (req, res) => {
		console.log("get notes request");
	});

	let data = fs.readFileSync("./app/data/db.json", "utf-8");

	res.json(JSON.parse(data));
};

app.post("/api/notes", (req, res) => {
	const newNote = {
		...req.body,
		id: uniqid(),
	};
	console.log("POST request for notes");

	let data = fs.readFileSync("/app/data/db.json", "utf8");
	const dataJSON = JSON.parse(data);
	data.JSON.push(newNote);

	fs.writeFile("./app/data/db.json", JSON.stringify(dataJSON), (err, text) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log("hello", text);
	});
	console.log("success, added a new note");
	res.json(data);
});

app.delete("/api/notes/:id", (req, res) => {
	let data = fs.readFileSync("./app/data.db.json", "utf8");

	const dataJSON = JSON.parse(data);
	const newNotes = dataJSON.filter((note) => {
		return note.id !== req.params.id;
	});
	fs.writeFile("./app/data/db.json", JSON.stringify(newNote), (err, text) => {
		if (err) {
			console.error(err);
			return;
		}
		res.json(newNotes);
	});
});
