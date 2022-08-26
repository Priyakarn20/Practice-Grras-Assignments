const express = require('express');
const app = express();
const DB = require('./db/index');
const foodModel = require('./model/food.model');
const PORT = 8000;

// connecting db
DB();
//allowing json objects
app.use(express.urlencoded({ exteded: true });

console.log(foodModel);

//create route 
app.post("/food", async function (req, res) {
    const { name, calories } = req.body;
    const food = new foodModel(req.body);
    try {
        await food.save();
        res.send("Data saved -->>> ");
    } catch (error) {
        res.send(error.message);
    }

});

app.get("/food", async function (req, res) {
    // {}- inside find will fetch all data
    //const response = await fetch(url)
    const foods = await foodModel.find({});
    try {
        res.send(foods);
    } catch (error) {
        res.send(error);
    }
}
);

//update route 
app.put("/food/:id", async function (req, res) {
    console.log(req.params);
    try {
        await foodModel.findByIdAndUpdate(req.params.id, req.body)
    } catch (error) {
        res.send(error.message)
    }
});

//delete route
app.delete("/food/:id", async function (req, res) {
   // findByAndDelete takes 1 argument called id
   const food = await foodModel.findByIdAndDelete(req.params.id);
   res.send(' Data deleted successfully ....!') 
})

app.listen(PORT, console.log(
    'server running on port: ' + PORT));
