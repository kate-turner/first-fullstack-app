const express = require("express");
const router = express.Router();

const Springs = require("../models/springs.js")

//db- Create route to create data in MongoDB
router.post('/', (req, res) => {
	Springs.create(req.body, (error, createdSpring) => {
		res.send(createdFruit);
		res.redirect('/springs');
	});
});

// db - Index route renders all springs, use find
router.get("/", (req, res) => {
	Springs.find({}, (err, allSprings) => {
		if(err) {
			console.log(err);
		} else {
			res.render("index.ejs", {
			springsList:allSprings
			})
		}
	})
})

router.get("/:id/edit", (req,res) => {
	Springs.findById(req.params.id, (err, foundSpring) => {
	res.render("edit.ejs",  {
		spring: foundSpring
		})
	});
});

router.get("/new", (req, res) => {
	res.render("new.ejs");
});




router.post("/new", (req, res) => {
	Springs.push(req.body);
	res.redirect('/springs');
	
});

router.get("/:index/edit", (req,res) => {
	res.render("edit.ejs",  {
		"springsList": Springs[req.params.index],
		index: req.params.index
		}
	);
});



router.put("/:index", (req,res) => {
	Springs[req.params.index] = (req.body);
	res.redirect('/springs');
});


// db- Show Route, had to change to id and edit index page to reflect .id
router.get("/:id", (req, res) => {
	Springs.findById(req.params.id, (err, foundSprings) =>{
		console.log(foundSprings);
		res.render("show.ejs", {
			springs:foundSprings
		});
	});
});


router.delete("/:index", (req, res) => {
	Springs.splice[req.params.index, 1]
	res.redirect("/springs");
});

module.exports = router;