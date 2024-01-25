require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {

   
    // Database connection 🥳
    mongoose.connect("Enter Your DataBase Strings", { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    }).catch(err => {
        console.log('Connection failed ☹️☹️☹️☹️');
    });
}

module.exports = connectDB;
