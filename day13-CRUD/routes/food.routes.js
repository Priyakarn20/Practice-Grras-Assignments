const express = require('express');
const {createFoods, readFoods, updateFood} = require('../controller/food.controller');
const router = express.Router();

router.post('/createfoods', createFoods);
router.get('/readfoods', readFoods);
router.put('/updatefood/:id', updateFood);

module.exports = router;