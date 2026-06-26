const express = require('express');
const router = express.Router();

const { sendOtp, verifyOtp } = require('../controllers/verify.email');
const { submitStudentJoiningForm } = require('../controllers/submit.student.joining.form');
const { submitProfessionalJoiningForm } = require('../controllers/submit.professional.joining.form');

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/join-student', submitStudentJoiningForm);
router.post('/join-professional', submitProfessionalJoiningForm);


module.exports = router;