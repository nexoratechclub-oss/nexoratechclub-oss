const mongoose = require('mongoose');
const sendWelcomeMail = require("../utils/send.welcome.mail");

const professionalJoiningFormSchema = new mongoose.Schema({
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

    organization: {
        type: String,
        required: true
    },

    currentRole: {
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


professionalJoiningFormSchema.post("save", async function (doc) {
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
    'ProfessionalJoiningForm',
    professionalJoiningFormSchema
);