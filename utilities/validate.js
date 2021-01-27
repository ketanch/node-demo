const { check } = require('express-validator');

module.exports = {
	inputFormat : [
		check('x').isNumeric(),
		check('y').isNumeric()
	]
};
