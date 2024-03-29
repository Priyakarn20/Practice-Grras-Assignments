const SportsModel = require("../model/sports.model");

 async function createSports(req, res) {
    if (!req.body.sports_name && !req.body.no_of_players) {
        res.send({
            message: "Content can not be empty",
        });
    }
    const NewSport = new SportsModel(req.body);

    try {
        await NewSport.save();
        res.send({
            message: "Game saved successfully",
            game_description: NewSport,
        });
    } catch (error) {
        res.send({ message: error.message });
    }

};


async function readSports(req, res){
    const sportsList = await SportsModel.find({});
    try {
        res.send({data: sportsList});
    } catch (error) {
      res.send({message: error.message});  
    };
}

module.exports = { createSports, readSports };