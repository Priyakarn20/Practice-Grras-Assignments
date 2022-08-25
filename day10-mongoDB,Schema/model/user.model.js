const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creating schema for user
const UserSchema = new Schema({
  name: String,
  phone: Number,
}); // the type of variables' first letter should be capital .
//creating model with specific schema 
const UserModel = mongoose.model('Users', UserSchema);
//exporting model
module.exports = UserModel;