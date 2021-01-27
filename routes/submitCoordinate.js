const express = require('express');
const router = express.Router();
const validate = require('../utilities/validate.js');
const subcoorCont = require('../controller/submitCoordinate.js');

router.post('/submitCoordinates', validate.inputFormat, subcoorCont);

router.get('/submitCoordinates', (req, res) => {
	res.status(200).send("Use POST request to access data.");
});

module.exports = router;
