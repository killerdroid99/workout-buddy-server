const Workout = require("../models/workoutModel");

const getAllWorkouts = async (req, res) => {
	try {
		const workouts = await Workout.find({}).sort("-createdAt");
		res.status(200).json(workouts);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const getWorkoutById = async (req, res) => {
	try {
		const workout = await Workout.findById(req.params.id);
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const createNewWorkout = async (req, res) => {
	try {
		const { title, reps, load } = req.body;
		const workout = await Workout.create({ title, reps, load });
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const deleteWorkoutById = async (req, res) => {
	try {
		const workout = await Workout.findByIdAndDelete(req.params.id);
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const updateWorkoutById = async (req, res) => {
	try {
		const workout = await Workout.findByIdAndUpdate(req.params.id, {
			...req.body,
		});
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	getAllWorkouts,
	getWorkoutById,
	createNewWorkout,
	deleteWorkoutById,
	updateWorkoutById,
};
