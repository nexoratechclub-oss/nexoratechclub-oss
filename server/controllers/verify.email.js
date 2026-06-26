const nodemailer = require("nodemailer");
const validator = require("validator");
const dotenv = require("dotenv");
dotenv.config();

const otpStorage = {};
const OTP_EXPIRATION_TIME = 5 * 60 * 1000;

const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStorage[email] = {
      otp,
      sentTime: Date.now(),
    };
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: `<${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP Code for Email Verification",
      html: `
                <div style=" font-family: 'Segoe UI', sans-serif; max-width: 520px; margin: auto; background: #1D232A; border: 1px solid #2a2a2a; border-radius: 20px; overflow: hidden; color: white; "> <!-- Top Bar --> <div style=" background: linear-gradient(90deg, #FBBD0C, #f59e0b); padding: 18px; text-align: center; "> <h1 style=" margin: 0; font-size: 28px; color: black; letter-spacing: 2px; "> NEXORA </h1> </div> <!-- Body --> <div style="padding: 40px 30px; text-align: center;"> <img src="https://cdn-icons-png.flaticon.com/512/295/295128.png" alt="OTP" style="width: 75px; margin-bottom: 20px;" /> <h2 style=" margin-bottom: 10px; font-size: 28px; color: #FBBD0C; "> Verify Your Email </h2> <p style=" color: #bdbdbd; font-size: 16px; line-height: 1.7; "> Hello <strong style="color:white;">${email}</strong>, <br /><br /> Welcome to the Nexora Tech Club <br /> Use the OTP below to complete your verification process. </p> <!-- OTP BOX --> <div style=" margin: 35px auto; background: #1D232A; border: 2px dashed #FBBD0C; border-radius: 16px; padding: 22px; width: fit-content; "> <div style=" font-size: 40px; font-weight: bold; letter-spacing: 10px; color: #FBBD0C; "> ${otp} </div> </div> <p style=" color: #9ca3af; font-size: 14px; margin-top: -10px; "> This OTP is valid for <strong>5 minutes</strong>. </p> <div style=" margin-top: 35px; padding: 18px; background: #1D232A; border-radius: 14px; color: #9ca3af; font-size: 14px; line-height: 1.6; "> Do not share this OTP with anyone. <br /> If you didn't request this email, you can safely ignore it. </div> </div> <!-- Footer --> <div style=" border-top: 1px solid #2a2a2a; padding: 18px; text-align: center; font-size: 13px; color: #6b7280; "> © 2026 Nexora Tech Club • Empowering Tech Innovators </div> </div> `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    } else {
      if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Email is Not Valid" });
      } else {
        const { otp: storedOtp, sentTime } = otpStorage[email];
        if (!storedOtp) {
          return res.status(400).json({ message: "Otp Not Found" });
        }
        const currentTime = Date.now();
        if (currentTime - sentTime > OTP_EXPIRATION_TIME) {
          delete otpStorage[email];
          return res.status(400).json({ message: "Otp Expired" });
        } else {
          if (otp !== storedOtp) {
            return res.status(400).json({ message: "Invalid Otp" });
          } else {
            delete otpStorage[email];
            return res
              .status(200)
              .json({ message: "Otp verification Success" });
          }
        }
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
};
