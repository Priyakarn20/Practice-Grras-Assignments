const express = require('express');
const {createFoods, readFoods} = require('../controller/food.controller');
const router = express.Router();

router.post('/createfoods', createFoods);
router.get('/readfoods', readFoods);

module.exports = router;