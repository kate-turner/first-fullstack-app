const mongoose = require('mongoose');

const springSchema = new mongoose.Schema({
	name: String,
	location: [String],
	temperature: Number,
});

module.exports = mongoose.model('Spring', springSchema);



// {
// 	[
// 	name: 'Radium',
// 	location: 'British Columbia, Canada',
// 	temperature: 104,
// 	],
// 	[
// 	name: 'Bob Weir',
// 	location: 'Kooskia, Idaho, USA',
// 	temperature: 102,
// 	],
// 	[
// 	name: 'Goldbug',
// 	location: 'Salmon, Idaho, USA',
// 	temperature: 103,
// 	],
// 	[
// 	name: 'Siams',
// 	location: 'Hot Springs, Montanta, USA'
// 	temperature: 101,
// 	]

// }
