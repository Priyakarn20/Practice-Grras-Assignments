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
        type:  Number,
        default: 1,
        validate(value) {
            if (value < 1) throw new Error("Roll no. can not be less than 0");
        },
    }

});

const Student = mongoose.model("Students", StudentsSchema);

module.exports = Student;