const mongoose = require('mongoose');

const foodsSchema = new mongoose.Schema({
    food_name: {
        type: String,
        required: true,

    },
    calories: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error("Calories can not be negative");
        },
    },
    ingredients: {
        type: Array,
        default: 2,
        validate(value) {
            if (value < 2) throw new Error("Atleast two ingredients must be specified");
        },
    },
});

const Foods = mongoose.model("Foods", foodsSchema);

module.exports = Foods;