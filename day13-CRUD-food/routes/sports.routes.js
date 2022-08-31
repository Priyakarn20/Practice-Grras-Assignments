const express = require('express');
const SportsController = require('./controller.SportsController');
const router = express.Router();

router.post('createsports', SportsController.createSports);

module.exports = router;
