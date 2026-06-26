const StudentJoiningForm = require('../models/student.joining.form.schema');

const submitStudentJoiningForm = async (req, res) => {
    try {
        const { name, email, phone, college, city, domain } = req.body;

        if (!name || !email || !phone || !college || !city || !domain) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const existingUser = await StudentJoiningForm.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: 'Email already exists'
            });
        }

        const newJoinForm = new StudentJoiningForm({
            name,
            email,
            phone,
            college,
            city,
            domain
        });

        await newJoinForm.save();

        res.status(201).json({
            message: 'Form submitted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
};

module.exports = { submitStudentJoiningForm };