const express = require('express');
const { createStudent , readStudents } = require('../controller/students.controller');
const router = express.Router();

router.post('/createstudent', createStudent);
router.get('/readstudents', readStudents);

module.exports = router;