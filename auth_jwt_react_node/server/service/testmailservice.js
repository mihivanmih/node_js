import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })


import nodemailer from 'nodemailer'

console.log( process.env.SMTP_USER)

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD
//     }
// })
//
// const mailOptions = {
//     from: process.env.SMTP_USER,
//     to: 'studiesmihailov@yandex.ru',
//     subject: 'Активация аккаунта на ' + process.env.API_URL,
//     text: '',
//     html: `
//                 <div>
//                     <h1>Для активации перейдите по ссылке</h1>
//                     <a href="gggg">rrrr</a>
//                 </div>
//             `
// }
//
// transporter.sendMail(mailOptions)

