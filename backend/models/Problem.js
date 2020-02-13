const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 16
    },
    description: {
        type: String,
        maxlength: 1024
    },
    language: {
        type: String,
        enum: ["PROLOG", "RACKET"]
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// problemSchema.methods.validateTitle = function() {
//     const foundProblem = this.find({
//         $and: {
//             title: this.title,
//             language: this.language
//         }
//     });

//     return foundProblem != null;
// };

problemSchema.pre("save", next => {
    const now = new Date();

    this.updated_at = now;

    if (!this.created_at) {
        this.created_at = now;
    }

    next();
});

module.exports = mongoose.model("Problem", problemSchema, "transactions");
