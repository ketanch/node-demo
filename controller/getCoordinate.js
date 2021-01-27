const {validationResult} = require('express-validator');
const Coordinate = require('../model/coordinateModule.js');

module.exports = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors : errors.array() });
	}
	try {
		var result = await Coordinate.getNearest(req.body);
		if (result == {}) {
			res.status(400).json({ error : "Empty Database!!"})
		}
		res.status(200).json(result);
	} catch (error) {
		res.status(400).send("Some Error occured.");
	}
}