const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const FlightSchema = new Schema({
    author:String,
    firstname:String,
    lastname:String,
    contact:String,
    email:String,
    people:String,
    type:String,
    date:String,
    place:String
});


module.exports = mongoose.model('Flight', FlightSchema);
