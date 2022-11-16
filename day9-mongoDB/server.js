const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;
const MONGO_DB_URL = 'mongodb+srv://user:<password>@cluster0.bpn3qta.mongodb.net/?retryWrites=true&w=majority';
/*mongoose.connect(MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, console.log('OK'));

mongoose.connect(MONGO_DB_URL, console.log('DATABASE CONNECTED'));
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

*/

const connectToDB = async () => {
    mongoose.connect(MONGO_DB_URL,
        err => {
            if(err) throw err;
            console.log('connected to MongoDB Database') 
        });
    }
    connectToDB();

app.listen(PORT, function(){
console.log('Server running on port', PORT);
});