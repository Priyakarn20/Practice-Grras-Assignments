const express = require('express');
const createStudent = require('../controller/students.controller');
const router = express.Router();

router.post('/createstudent', createStudent);

module.exports = router;