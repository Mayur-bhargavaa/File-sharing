require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {

   
    // Database connection 🥳
    mongoose.connect("mongodb+srv://DBmayur:Mayur%402608@cluster0.ytcpzbb.mongodb.net/", { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    }).catch(err => {
        console.log('Connection failed ☹️☹️☹️☹️');
    });
}

module.exports = connectDB;