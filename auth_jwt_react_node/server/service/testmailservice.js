require('dotenv').config()
const nodemailer = require('nodemailer')

//console.log( process.env.SMTP_USER)

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
})

const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'studiesmihailov@yandex.ru',
    subject: 'Активация аккаунта на ' + process.env.API_URL,
    text: 'Текст письма'
}

transporter.sendMail(mailOptions)

