const {validationResult} = require('express-validator');
const Coordinate = require('../model/coordinateModule.js');

module.exports = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors : errors.array() });
	}
	try {
		var result = Coordinate.createNew(req.body);
		res.status(200).send("Successfully Registered.");
	} catch (error) {
		res.status(400).send("Some Error occured.");
	}
}
