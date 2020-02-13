const mongoose = require("mongoose");

const { user, password } = require("config/credentials").database;

const uri = `mongodb+srv://${user}:${password}@major-disappointment-yuozv.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = {
    connect: () => {
        mongoose.connect(
            uri,
            { useNewUrlParser: true, useUnifiedTopology: true },
            err => {
                if (err) {
                    console.error(
                        `****** Error connecting to database! ${err}`
                    );
                } else {
                    console.log("----- Successfully connected to database.");
                }
            }
        );
    }
};
