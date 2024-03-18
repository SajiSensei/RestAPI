const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MasakitonSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    mname:{
        type: String,
        required: false
    },
    lname:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    birthday:{
        type: Date,
        required: true
    },
    vaccinated:{
        type: Boolean,
        required: true
    },
    feverlast15days:{
        type: Boolean,
        required: true
    },
    lastDateAdmitted:{
        type: Date,
        required: true
    },
    motherName:{
        type: String,
        required: true
    },
    fatherName:{
        type: String,
        required: true
    },
    dateCreated:{
        type: Date,
        default: Date.now
    }
})

const Masakiton = mongoose.model('masakiton_details', MasakitonSchema);
module.exports = Masakiton;