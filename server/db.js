const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/styleMatcher';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('connected',()=>{
    console.log('Connection is established');
})

db.on('disconnected',()=>{
    console.log('Connection is broken');
})

db.on('error',()=>{
    console.log('Connection error');
})

module.exports = db;