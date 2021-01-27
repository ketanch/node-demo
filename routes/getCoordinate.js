const express = require('express');
const router = express.Router();
const validate = require('../utilities/validate.js');
const getcoorCont = require('../controller/getCoordinate.js');

router.post('/getCoordinates', validate.inputFormat, getcoorCont);

router.get('/getCoordinates', (req, res) => {
	res.status(200).send("Use POST request to access data.");
});

module.exports = router;