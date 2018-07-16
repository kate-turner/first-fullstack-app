const express = require('express');
const app = express();

require('./db/db');

// const Springs = require("./models/springs.js")

const Springs = require("./models/springsPopulate.js")

app.get('/springs', (req, res) => {
	res.render("index.ejs", {
		"springsList":Springs
	})
})

app.get('/springs/:index', (req, res) => {

	
	res.render("show.ejs", {
		springsList:Springs[req.params.index]
	});
});


















app.listen(3000, () => {
	console.log("listening on port 3000");
})