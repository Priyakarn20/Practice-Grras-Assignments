const StudentsModel = require("../model/students.model");

exports.createStudent = async function (req, res){
    if(!req.body.student_name && !req.body.class){
        res.send({
            message: "Please enter student's name and class"
        });
    }

    const NewStudent = new StudentsModel(req.body);

    try {
        await NewStudent.save();
        res.send({
            message: "Student's details successfully saved",
        student_description: NewStudent,
    });
    } catch (error) {
        res.send({
            message: error.message
        });
    }
};