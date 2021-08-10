import nodemailer from 'nodemailer';
import cron from 'node-cron'
import dotenv from 'dotenv';
import {transport, options} from './objects'
import Express from 'express'

const app = Express();
const port = 3000;

dotenv.config();

const transporter = nodemailer.createTransport(transport);

async function sendMail() {
    let info = await transporter.sendMail(options);
    nodemailer.createTransport()
    console.log("Message sent", info.messageId);
}

app.get("/", (req, res) => {
    cron.schedule('*/1 * * * *', () => {
        sendMail().catch(console.error);
    })
    res.send("Mail sent");
})

app.listen(port)