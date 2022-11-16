const express = require('express');
const {createSports , readSports} = require('../controller/sports.controller');
const router = express.Router();

router.post('/createsports', createSports);
router.get('/readsports', readSports);

module.exports = router;

