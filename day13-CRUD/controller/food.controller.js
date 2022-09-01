
const FoodsModel = require('../model/food.model');


 async function createFoods(req, res) {
    if (!req.body.food_name && !req.body.ingredients) {
        res.send({
            message: "Content can not be empty",
        });
    }

    const NewFood = new FoodsModel(req.body);

    try {
        await NewFood.save();
        res.send({
            message: "Food saved successfully",
            food_description: NewFood,
        });
    } catch (error) {
        res.send({ message: error.message });
    }
};

async function readFoods(req, res) {
    const foodsMenu = await FoodsModel.find({});
    try {
        res.send({ data: foodsMenu} );
    } catch (error) {
        res.send({ message: error.message });
    };
}

module.exports = {createFoods , readFoods };