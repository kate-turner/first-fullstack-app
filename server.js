const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
require('./db/db');

// const Springs = require("./models/springs.js")

const Springs = require("./models/springsPopulate.js")

app.get('/springs', (req, res) => {
	res.render("index.ejs", {
		"springsList":Springs
	})
})

app.get("/springs/new", (req, res) => {
	res.render("new.ejs");
});

app.post("/springs/new", (req, res) => {
	Springs.push(req.body);
	res.redirect('/springs');
	
});

app.get("/springs/:index/edit", (req,res) => {
	res.send("edit works");
	// res.render("edit.ejs",  {
	// 	spring: Springs[req.params.index],
	// 	index: req.params.index
	// 	}
	// );
});





app.get('/springs/:index', (req, res) => {
	res.render("show.ejs", {
		springsList:Springs[req.params.index]
	});
});





// app.get('springs/:id/edit', (req, res) => {
// 	res.render('edit.ejs', {

// 	})
// })




















app.listen(3000, () => {
	console.log("listening on port 3000");
})