const mongoose = require('mongoose');

const StudentsSchema = new mongoose.Schema ({
    student_name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    }, 
    roll_no: {
        type: number,
        required: true,
    },

});

const Student = mongoose.model("Students", StudentsSchema);

module.exports = Student;