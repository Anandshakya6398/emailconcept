// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
const dotenv = require("dotenv");
dotenv.config();
console.log("email", process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// sgMail.setDataResidency('eu'); 
// uncomment the above line if you are sending mail using a regional EU subuser

const msg = {
  to: 'amauryashaky198@gmail.com', // Change to your recipient
  from: 'anandshakya6398@gmail.com', // Change to your verified sender
  subject: 'Sending my First Email',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })