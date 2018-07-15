const express = require('express');
const app = express();

require('./db/db');

const Springs = require("./models/springs.js")



















app.listen(3000, () => {
	console.log("listening on port 3000");
})