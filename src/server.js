require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workouts = require("../routes/workouts");
const bodyParser = require("body-parser");

const app = express();

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(bodyParser.json());

app.use("/", workouts);

app.listen(process.env.PORT, async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log(`listening at port ${process.env.PORT} and connected to db`);
	} catch (error) {
		console.log({ error });
	}
});
