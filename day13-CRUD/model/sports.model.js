const mongoose = require('mongoose');

const SportsSchema = new mongoose.Schema({
    sports_name: {
        type: String,
        required: true,
    
    },
    no_of_players: {
        type: Number,
        default: 2,
        validate(value) {
            if (value < 2) throw new Error("Atleast two players must be specified");
        },
    },
    equipments:{
type: Array,
required: true,
    },
});

const Sports = mongoose.model("Sports", SportsSchema );

module.exports = Sports;