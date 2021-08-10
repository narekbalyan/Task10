import {MailOptions, authentication, Transport} from './interfaces'

export const options: MailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Title",
    text: "Hi",
}

export const mailAuth: authentication = {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
}

export const transport: Transport = {
    host: "smtp.gmail.com",
    secure: false,
    port: 587,
    auth: mailAuth,
}