const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    salary:{
        type:Number,
        required: false
    },
    city: {
        type: String,
        default: 'Bengalore'
    },
    job:{
        type:String,
        enum: ['Developer','Tester','HR'],
        required: true
    }
})

const PersonModel = mongoose.model('Person', PersonSchema);
module.exports = PersonModel;