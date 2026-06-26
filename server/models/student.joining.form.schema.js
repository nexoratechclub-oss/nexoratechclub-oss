const mongoose = require('mongoose');
const sendWelcomeMail = require("../utils/send.welcome.mail");

const studentJoiningFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: Number,
        required: true
    },

    college: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    domain: {
        type: String,
        required: true,
        enum: [
            'Web Development',
            'Mobile App Development',
            'Data Science',
            'UI/UX Design',
            'Artificial Intelligence',
            'Machine Learning'
        ]
    }
});

studentJoiningFormSchema.post("save", async function (doc) {
    try {
        await sendWelcomeMail(
            doc.name,
            doc.email
        );
    }
    catch (error) {
        console.log("Welcome Mail Error:", error);
    }
});

module.exports = mongoose.model(
    'StudentJoiningForm',
    studentJoiningFormSchema
);