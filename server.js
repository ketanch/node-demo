const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const getCoorRoute = require('./routes/getCoordinate.js');
const submitCoorRoute = require('./routes/submitCoordinate.js');
const db = require('./utilities/mongo_db.js');

app.use(bodyparser.json());
db();

app.post('*', (req, res, next) => {
	console.log("Coordinate Received : (%d,%d)", req.body.x, req.body.y);
	next();
});
app.use('/', getCoorRoute);
app.use('/', submitCoorRoute);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/static/index.html');
});

app.listen(12345);
console.log("Server listening at http://127.0.0.1:12345/");