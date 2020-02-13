const express = require("express");
const cors = require("cors");

const app = express();

const database = require("database");
const router = require("router");

database.connect();

cors();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`----- Listening on port ${port}.`);
});
