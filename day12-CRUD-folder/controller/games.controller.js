const { response } = require('express');
const GameModel = require('../model/games.model');

// Create and save a new Game 
//exporting and creating function crea at the same time 

exports.createGame = async function (req, res) {
    if (!req.body.game_name && !req.body.equipments) {
        res.send({
            message: 'Content can not be empty'
        });
    }
    const NewGame = new GameModel(req.body);
    try {
        await NewGame.save();
        res.send({
            message: "Game saved successfully",
            game_description: NewGame
        })
    } catch (error) {
        res.send({ message: error.message });
    }
};