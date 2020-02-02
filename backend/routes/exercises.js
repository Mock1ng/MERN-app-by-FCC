const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.get("/", async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.post("/add", async (req, res) => {
    const exercise = new Exercise({
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date)
    });
    try {
        const savedExercise = await exercise.save();
        res.json(savedExercise);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);
        res.json(exercise);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndDelete(req.params.id);
        res.json("exercise is deleted.");
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.patch("/update/:id", async (req, res) => {
    try {
        const updatedExercise = await Exercise.updateOne(
            {
                _id: req.params.id
            },
            {
                $set: {
                    username: req.body.username,
                    description: req.body.description,
                    duration: Number(req.body.duration),
                    date: Date.parse(req.body.date)
                }
            }
        );
        res.json("Exercise is updated");
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;
