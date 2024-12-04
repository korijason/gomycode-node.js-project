// Task: Send an email using "nodemailer"

const nodemailer = require('nodemailer');

// Configure the transporter for sending email
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail service
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password
    },
});

// Email options
const mailOptions = {
    from: 'koriesta8@', // Sender email
    to: 'your-email@gmail.com', // Receiver email
    subject: 'Node.js Email Test',
    text: 'Hello! This is a test email sent from Node.js.', // Email body
};

// Send the email
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error('Error sending email:', err);
    } else {
        console.log('Email sent:', info.response);
    }
});
