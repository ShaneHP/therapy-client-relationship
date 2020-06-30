const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create therapist Schema & model
const TherapistSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title field is required']
    },
    fname: {
        type: String,
        required: [true, 'First name field is required']
    },
    surname: {
        type: String,
        required: [true, 'Surname field is required']
    },
    mobile: {
        type: String,
        required: [true,'Mobile phone field is required']
    },
    homePhone: {
        type: String,
        required: [true,'Home phone field is required']
    },
    email: {
        type: String,
        required: [true, 'Email address is required']
    },
    address: {
        addressLine1: String,
        addressLine2: String,
        town: String,
        county: String,
        eircode: String
    }
});

const Therapist = mongoose.model('therapist', TherapistSchema);
module.exports = Therapist;