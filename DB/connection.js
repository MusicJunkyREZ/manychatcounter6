const mongoose = require('mongoose');
const keys = require('../config/keys');
const username = keys.username;
const password = keys.password;


// const URI = mongoURI;

const connectDB = async() => {
    await mongoose.connect(`mongodb+srv://${username}:${password}@manychat-counter6-ezjki.mongodb.net/test?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log('db connected..!')
};

module.exports = connectDB;