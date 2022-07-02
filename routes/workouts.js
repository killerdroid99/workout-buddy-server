const express = require("express");
const {
	getAllWorkouts,
	getWorkoutById,
	createNewWorkout,
	deleteWorkoutById,
	updateWorkoutById,
} = require("../controllers/workoutController");
const router = express.Router();

router.get("/", getAllWorkouts);

router.get("/:id", getWorkoutById);

router.post("/", createNewWorkout);

router.delete("/:id", deleteWorkoutById);

router.patch("/:id", updateWorkoutById);

module.exports = router;
