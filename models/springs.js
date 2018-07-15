const mongoose = require('mongoose');

const springSchema = new mongoose.Schema({
	name: String,
	location: String,
	temperature: Number,
});

module.exports = mongoose.model('Spring', springSchema);



