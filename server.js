const express = require('express');
const app = express();

require('./db/db');

const Springs = require("./models/springs.js")

Springs.collection.insertMany([
	{
	name: 'Radium',
	location: 'British Columbia, Canada',
	temperature: 104
	},
	{
	name: 'Bob Weir',
	location: 'Kooskia, Idaho, USA',
	temperature: 102
	},
	{
	name: 'Goldbug',
	location: 'Salmon, Idaho, USA',
	temperature: 103
	},
	{
	name: 'Siams',
	location: 'Hot Springs, Montanta, USA',
	temperature: 101,
	}], (err, resSprings) => {
		if(err) {
		console.log(err);
		} else {
		console.log(resSprings)
		}
	});
















app.listen(3000, () => {
	console.log("listening on port 3000");
})