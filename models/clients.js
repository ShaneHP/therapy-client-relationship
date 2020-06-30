const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create client Schema & model
const ClientSchema = new Schema({
    timestamp:{
        type: Date
    },
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
    dob: {
        type: String,
        required: [true, 'Date of birth is required']
    },
    parentOrGuardian:{
        type: String
    },
    address: {
        addressLine1: String,
        addressLine2: String,
        town: String,
        county: String,
        eircode: String
    },
    permissions: {
        mobilePermission: Boolean,
        homePhonePermission: Boolean,
        emailPermission: Boolean
    },
    maritalStatus: {
        neverMarried: Boolean,
        domestic: Boolean,
        married: Boolean,
        seperated: Boolean,
        divorced: Boolean,
        widowed: Boolean 
    },
    referredBy: {
        type: String
    }
});

const Client = mongoose.model('client', ClientSchema);
module.exports = Client;