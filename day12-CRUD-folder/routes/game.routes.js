const express = require('express');
const GameController = require('../controller/games.controller');
const router = express.Router();

router.post('/create', GameController.createGame);

module.exports = router;
