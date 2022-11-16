const express = require('express');
const app = express();
const cors  = require('cors');
const UserRoute = require('./routes/user.route');
const DBCONFIG = require('./db');
const PORT = 8000;
 
DBCONFIG();
app.use(cors());  

app.use(express.json());


app.use('/user', UserRoute);
app.listen(PORT, console.log('Server is running on port', PORT));
