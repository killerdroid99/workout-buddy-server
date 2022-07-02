const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.json({ name: "sam" });
});

app.listen(4000, () => {
	console.log("listening at port 4000");
});
