const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');
const fs = require("fs");

async function updateTemplateHandler(templatePath, toReplaceObject){
    try{
        let templateContent = await fs.promises.readFile(templatePath, 'utf8');
        const keyArrs = Object.keys(toReplaceObject);
        keyArrs.forEach((key) => {
            templateContent = templateContent.replace(`#{${key}}`, toReplaceObject[key]);
        });
        return templateContent;
    }
    catch (error) {
        console.error("Error reading or updating template:", error);
        throw error;
    }
}

    async function sendEmail(templatePath, recieverEmail, toReplaceObject) {
        try {
            const content = await updateTemplateHandler(templatePath, toReplaceObject);
            const techDetails = {
                host: process.env.EMAIL_HOSTNAME,
                port: process.env.EMAIL_PORT,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.SENDGRID_API_KEY
                }
            };
            const msg = {
                to: recieverEmail, // Change to your recipient
                from: process.env.EMAIL_FROM, // Change to your verified sender
                subject: 'Sending my First Email',
                text: 'and easy to do anywhere, even with Node.js',
                html: content,
            }
    
            const transporter = nodemailer.createTransport(techDetails);
            await transporter.sendMail(msg);
            console.log('Email sent successfully_1');
        }
        catch (error) {
            console.error('Error sending email:', error);
        }
    }
    
module.exports = sendEmail;