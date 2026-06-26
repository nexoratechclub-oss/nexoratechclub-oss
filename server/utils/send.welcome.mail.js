const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendWelcomeMail = async (name, email) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: `NEXORA <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "🎉 Welcome to Nexora Tech Club",
        html: `
        <div style="
            font-family:Segoe UI,sans-serif;
            max-width:600px;
            margin:auto;
            background:#1D232A;
            color:white;
            border-radius:20px;
            overflow:hidden;
            border:1px solid #2a2a2a;
        ">

            <div style="
                background:linear-gradient(90deg,#FBBD0C,#f59e0b);
                padding:20px;
                text-align:center;
            ">
                <h1 style="
                    margin:0;
                    color:black;
                    letter-spacing:2px;
                ">
                    NEXORA
                </h1>
            </div>

            <div style="padding:40px 30px">

                <h2 style="
                    color:#FBBD0C;
                    text-align:center;
                    margin-bottom:20px;
                ">
                    Welcome to Nexora
                </h2>

                <p>
                    Hi <strong>${name}</strong>,
                </p>

                <p style="line-height:1.8;color:#d1d5db">
                    Congratulations! Your registration has been
                    successfully approved and you are now officially
                    a member of the Nexora Tech Club.
                </p>

                <div style="
                    background:#111827;
                    border:1px solid #FBBD0C;
                    border-radius:14px;
                    padding:20px;
                    margin:25px 0;
                ">
                    <h3 style="
                        color:#FBBD0C;
                        margin-top:0;
                    ">
                        What's Next?
                    </h3>

                    <ul style="line-height:1.8;color:#d1d5db">
                        <li>Connect with community members</li>
                        <li>Participate in workshops & hackathons</li>
                        <li>Get mentorship opportunities</li>
                        <li>Build impactful projects</li>
                    </ul>
                </div>

                <div style="text-align:center">

                    <a
                        href="${process.env.WHATSAPP_GROUP_LINK}"
                        style="
                            display:inline-block;
                            padding:14px 28px;
                            background:#25D366;
                            color:white;
                            text-decoration:none;
                            border-radius:10px;
                            font-weight:bold;
                        "
                    >
                        Join WhatsApp Community
                    </a>

                </div>

                <p style="
                    margin-top:30px;
                    color:#9ca3af;
                    line-height:1.7;
                ">
                    We are excited to have you onboard.
                    Let's build, learn and grow together.
                </p>

            </div>

            <div style="
                border-top:1px solid #2a2a2a;
                padding:16px;
                text-align:center;
                color:#6b7280;
                font-size:13px;
            ">
                © 2026 Nexora Tech Club
            </div>

        </div>
        `
    });
};

module.exports = sendWelcomeMail;