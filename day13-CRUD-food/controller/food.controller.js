
const FoodsModel = require('../model/food.model');

//exporting and creating function at the same time 

exports.createFoods = async function (req, res) {
    if (!req.body.food_name && !req.body.ingredients) {
        res.send({
            message: "Content can not be empty",
        });
    }

    const NewFood = new FoodsModel.modelName(req.body);

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