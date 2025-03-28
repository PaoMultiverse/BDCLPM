import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user:process.env.USER_SENT_OTP,
      pass:process.env.PASSWORD,
    },
});

export default transporter;