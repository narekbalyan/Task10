import nodemailer from 'nodemailer';
import cron from 'node-cron'
import dotenv from 'dotenv';
import {transport, options} from './objects'

dotenv.config();

const transporter = nodemailer.createTransport(transport);

async function sendMail() {

    let info = await transporter.sendMail(options);
    nodemailer.createTransport()
    console.log("Message sent", info.messageId);
}

cron.schedule('*/5 * * * *', () => {
    sendMail().catch(console.error);
})