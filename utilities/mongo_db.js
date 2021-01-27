var mongoose = require('mongoose');
mongo_url = "mongodb://127.0.0.1:27017/";

module.exports = () => {
	mongoose.set('useNewUrlParser', true);
	mongoose.set('useUnifiedTopology', true);
	mongoose.connect(mongo_url);
	
	mongoose.connection.on('error', (err) => {
		console.log("Some error occured while connecting to database.");
	});
	
	mongoose.connection.on('connected', (err) => {
		console.log("Connected to database.");
	});
	
	mongoose.connection.on('disconnected', (err) => {
		console.log("Disconnected from database.");
	});
}