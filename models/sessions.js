const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create session Schema & model
const SessionSchema = new Schema({
    sessionDate: {
        type: String,
        required: [true, 'Session date field is required']
    },
    sessionTime: {
        type: String,
        required: [true, 'Session time field is required']
    },
    therapistID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'therapist', required: true
    },
    clientID: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'client', required: true}
    ],
    fee: {
        type: String,
        required: [true, 'Fee is required']
    },
    sessionNumber: {
        type: Number,
        required: [true, 'Session number is required']
    },
    sessionDuration: {
        type: String,
        required: [true, 'Session duration is required']
    },
    sessionType: {
        intake: Boolean,
        psychotherapy: Boolean,
        assessment: Boolean,
        other: String
    },
    issueFlag: {
        type: Boolean,
        required: [true, 'Issue Flag is required']
    },
    sessionNotes: {
        type: String,
        required: [true, 'Session notes are required']
    }
});

const Session = mongoose.model('session', SessionSchema);
module.exports = Session;