const express = require('express');
const FoodsController = require('../controller/food.controller');
const router = express.Router();

router.post('createfoods', FoodsController.createFoods);

module.exports = router;