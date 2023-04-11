const MongoClient = require('mongodb').MongoClient;
//const url = 'mongodb://localhost:27017';
let db = null;

 
// connect to mongo
MongoClient
    .connect(
        process.env.MONGODB_CONNECTION_STRING, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, function (err, client) {
    console.log("Connected successfully to db server");

    // connect to myproject database
    db = client.db('badbank');
});

// create user account using the collection.insertOne function
function create(name, email, password) {
    // TODO: populate this function based off the video
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
    // TODO: populate this function based off the video
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