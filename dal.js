require("dotenv").config();
//const path = require("path");
const MongoClient = require('mongodb').MongoClient;
//const mongoose = require('mongoose');
//const url = 'mongodb://localhost:27017';
//const url = process.env.MONGO_URI;
let db = null;

// mongoose
// .connect(
//     "mongodb+srv://adrianago1105:Jc9oZBqWYulgRG8y@cluster0.sgzjgks.mongodb.net/?retryWrites=true&w=majority",
//   {useNewUrlParser: true}
// )
// .then((x) => {
//     console.log('Connected to the DB');
//     db = client.db('myproject');
// })
// .catch(err => console.error('Error while connecting to DB', err));
// connect to mongo
MongoClient
    .connect(
        "mongodb+srv://adrianago1105:Jc9oZBqWYulgRG8y@cluster0.sgzjgks.mongodb.net/?retryWrites=true&w=majority", 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, function (err, client) {
    console.log("Connected successfully to db server");

    // connect to myproject database
    db = client.db('myproject');
});


// create user account using the collection.insertOne function
function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance:0};
        // this will insert one document, that was just created in the above line
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}

// find user account 
function find(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({ email: email })
            .toArray(function (err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}

// find user account
function findOne(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOne({ email: email })
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
    })
}

// update - deposit/withdraw amount
function update(email, amount) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate(
                { email: email },
                { $inc: { balance: amount } },
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );


    });
}

// return all users by using the collection.find method
function all() {
    return new Promise((resolve, reject) => {
        const customers = db 
        .collection('users')
        .find({})
        .toArray(function(err, docs) {
            err ? reject(err): resolve(docs);
        });
    })
}





module.exports = { create, findOne, find, update, all };


// need to run: docker run -p 27017:27017 --name bad-bank -d mongo