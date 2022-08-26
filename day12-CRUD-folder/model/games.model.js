const mongoose = require('mongoose');

const GamesSchema = new mongoose.Schema({
    game_name: {
        type: String,
        required: true,
        validate(value) {
            if (value.length< 2) throw new Error("Alleast two characters must be specified");
                },
    },
    no_of_players: {
        type: Number,
        default: 2,
        validate(value) {
            if (value< 2) throw new Error("Alleast two players must be specified");
                },
    },
    name_of_players:{
        type: Array,
        
    },
        euipments: {
            type: Array,
            required: true,
        },
 

});

const Game = mongoose.model("Game", GamesSchema);

module.exports = Game;