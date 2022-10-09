const express = require('express');
const app = express();

const DBCONFIG = require('./db');


const PORT = 6758;
DBCONFIG();


app.use(express.json());



app.listen(PORT, console.log('Server is running on port', PORT));
