const express = require('express');
const createSports = require('../controller/sports.controller');
const router = express.Router();

router.post('/createsports', createSports);

module.exports = router;

