const express = require("express");

const router = express.Router();

const problemModel = require("models/Problem");

router.get("/problem", async (req, res) => {});

router.post("/problem", async (req, res) => {
    const { title, description, language } = req.body;

    let statusCode = 200;

    const feedback = {
        problem: null,
        clientMessage: "",
        serverMessage: "",
        error: false
    };

    if (!title || !description || !language) {
        statusCode = 400;
        feedback.clientMessage = "Missing title, description or language!";
        feedback.serverMessage = "Missing title, description or language!";
        feedback.error = true;
    } else {
        await problemModel.create(
            {
                title,
                description,
                language
            },
            (err, problem) => {
                if (err) {
                    statusCode = 500;
                    feedback.clientMessage = "Internal server error!";
                    feedback.serverMessage = `Error while saving problem on database! ${err}`;
                    feedback.error = true;
                    // } else if (!problem.validateTitle()) {
                    //     statusCode = 409;
                    //     feedback.clientMessage = "Title already exists!";
                    //     feedback.serverMessage = "Title already exists!";
                    //     feedback.error = true;
                } else {
                    statusCode = 200;
                    feedback.problem = problem;
                    feedback.clientMessage = "";
                    feedback.serverMessage = "";
                    feedback.error = false;
                }

                console.log(problem);
            }
        );
    }

    return res.status(statusCode).json(feedback);
});

module.exports = router;
