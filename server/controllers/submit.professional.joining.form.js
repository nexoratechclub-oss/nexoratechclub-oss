const ProfessionalJoiningForm = require('../models/professional.joining.form.schema');

const submitProfessionalJoiningForm = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            organization,
            currentRole,
            city,
            domain
        } = req.body;

        if (
            !name ||
            !email ||
            !phone ||
            !organization ||
            !currentRole ||
            !city ||
            !domain
        ) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const existingUser = await ProfessionalJoiningForm.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: 'Email already exists'
            });
        }

        const professional = new ProfessionalJoiningForm({
            name,
            email,
            phone,
            organization,
            currentRole,
            city,
            domain
        });

        await professional.save();

        res.status(201).json({
            message: 'Professional form submitted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        });
    }
};

module.exports = {
    submitProfessionalJoiningForm
};