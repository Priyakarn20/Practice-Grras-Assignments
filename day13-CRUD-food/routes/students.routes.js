const express = require('express');
const StudentController = require('../controller/student.controller');
const router = express.Router();

router.post('/createstudent', StudentController.createStudent);

module.exports = router;