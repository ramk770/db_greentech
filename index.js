const express = require('express');
const db = require("./module/db");
const createfun = require("./module/createmodel");

// const bodyParser = require('body-parser');
// const userRoutes = require('./routes/userRoutes');

const app = express();

// // Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// npm 



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});