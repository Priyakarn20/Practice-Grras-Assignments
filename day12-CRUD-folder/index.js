const express = require('express');
const app = express();
const DBCONFIG = require('./db');
const GamesRoute = require('./routes/game.routes');
const PORT = 8242;

app.use(express.json());

// connect to mongo db database 
DBCONFIG();

app.use('/game', GamesRoute);

app.listen(PORT, console.log( 'Heya...! Server running on port', PORT));
