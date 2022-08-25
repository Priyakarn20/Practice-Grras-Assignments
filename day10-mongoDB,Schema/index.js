const express = require('express');
const app = express();
const connectToDB = require('./db');
const UserModel = require('../model/user.model');
const PORT = 8000;

    connectToDB();
// using this , we can send and view json data
    app.use(express.json());

    app.get('/',(req, res) => {
        res.send('working on port');
    });

    app.post("/adduser", (request, response) =>{
console.log(request.body);
response.send(' Please check your console');
    });

app.listen(PORT, function(){
console.log('Server is running on port', PORT);
});