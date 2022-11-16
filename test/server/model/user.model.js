const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        default: 6,
        validate(value){
            if(value < 6) throw new Error("password must contain atleast 6 characters");
        },
    },
    phone:{
        type: Number,
        default: 10,
        Validate(value){
            if(value < 10) throw new Error(" Phone no. must contain atleast 10 digits"); 
        },
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;
