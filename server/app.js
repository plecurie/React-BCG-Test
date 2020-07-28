const express = require('express');
const cors = require('cors');
const db = require('./utils/db');
const app = express();

const ridesRouter = require('./routes/rides');

app.use(cors());
app.use(express.json());
app.use('/rides', ridesRouter);


if(db.dbConnect()) {
    app.listen(1234);
    console.log('NodeJS server running on port ', 1234);
} else {
    console.log("Error connecting db")
}


module.exports = app;
