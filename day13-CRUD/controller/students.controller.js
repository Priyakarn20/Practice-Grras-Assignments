const StudentsModel = require("../model/students.model");

 async function createStudent(req, res){
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

async function readStudents(req, res){
    const studentList = await StudentsModel.find({});
    try {
        res.send({data: studentList});
    } catch (error) {
res.send({message: error.message});
    }
}

module.exports = { createStudent, readStudents };