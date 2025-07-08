const mongoose = require("mongoose");

const dotenv = require("dotenv")
dotenv.config();



const dbLink = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.ulwg9cc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(dbLink);

mongoose.connect(dbLink)
    .then(function (connection) {
        console.log("connected to db")
    }).catch(err => console.log(err))