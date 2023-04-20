const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Importing routes
const movie = require('./routes/movieRoute');

app.use('/', movie);

app.get("/", (req, res) => {
    res.status(200).send(
        "API is working fine"
    );
})

//middleware for error
app.use(errorHandler);

module.exports = app;