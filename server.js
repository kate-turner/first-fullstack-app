const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
require('./db/db');

// const Springs = require("./models/springs.js")

const springController = require("./controllers/springController");

app.use("/springs", springController);




app.listen(3000, () => {
	console.log("listening on port 3000");
})