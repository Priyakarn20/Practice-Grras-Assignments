const express = require('express');
const app = express();

const DBCONFIG = require('./db');
const FoodsRoute = require('./routes/food.routes');
const SportsRoute = require('./routes/sports.routes');
const StudentsRoute = require('./routes/students.routes');

const PORT = 5758;
DBCONFIG();


app.use(express.json());
app.use('/sports', SportsRoute);
app.use('/foods', FoodsRoute);
app.use('/Student', StudentsRoute);

app.listen(PORT, console.log('Server is running on port', PORT));
