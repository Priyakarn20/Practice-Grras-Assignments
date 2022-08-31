const mongoose = require('mongoose');
const MONGO_DB_URL = 'mongodb+srv://user:user@cluster0.bpn3qta.mongodb.net/?retryWrites=true&w=majority';

const connecttoDB = async () => {
    mongoose.connect(MONGO_DB_URL,
        err => {
            if (err) throw err;
            console.log('connected to MongoDB Database');
        }
    )
}

module.exports = connecttoDB;