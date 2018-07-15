
const mongoose = require('mongoose');

//database name is springs
mongoose.connect('mongodb://localhost:27017/springs');

mongoose.connection.on('connected', () => {
	console.log("Mongoose is connected")
});

mongoose.connection.on('error', (err) => {
	console.log(err, 'mongoose failed to connect')
});

mongoose.connection.on('disconnected', () => {
	console.log("Mongoose is disconnected")
})