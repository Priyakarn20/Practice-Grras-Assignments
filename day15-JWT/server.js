const express = require('express');
const app = express();
const DBCONFIG = require('./db');
const PORT= 9000;
DBCONFIG();


app.use(express.json());


app.listen(PORT, console.log('Server is running on port', PORT));




/*const jwt = require('jsonwebtoken');
const secret ='Apple';

function generateJWTToken(username){
    return jwt.sign(username, secret, {expiresIn: "3600s"});
}


app.listen(PORT, console.log(' Server listening on port ' + PORT));

console.log(module);*/
