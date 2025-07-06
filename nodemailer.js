const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
dotenv.config();

function emailService() {
    const techDetails = {
        host: "smtp.sendgrid.net",
        port: 465,
        secure: true,
        auth: {
            user: "apikey",
            pass: process.env.SENDGRID_API_KEY
        }
    };
    const msg = {
        to: 'amauryashaky198@gmail.com', // Change to your recipient
        from: 'anandshakya6398@gmail.com', // Change to your verified sender
        subject: 'Sending my First Email',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    const transporter = nodemailer.createTransport(techDetails);
    transporter.sendMail(msg).then(() => {
        console.log('Email sent successfully');
    })
        .catch((error) => {
            console.error('Error sending email:', error);
        });

}

emailService();