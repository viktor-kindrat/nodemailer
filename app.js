const open = require("open")

const nodemailer = require('nodemailer');
require("dotenv").config();
let { S_SERVICENAME, S_MAIL, S_PASS, S_MESSAGE, S_HTML, S_MAILTHEME, S_HOST, S_PORT } = process.env;
let transporter = nodemailer.createTransport({
    host: S_HOST,
    port: S_PORT,
    auth: {
        user: S_MAIL,
        pass: S_PASS
    }
});


const PORT = process.env.PORT || 3000;
const express = require("express");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile("./index.html")
})

app.post("/send", function(req, res) {
    let mails = req.body.join(", ")
    let message = {
        from: S_SERVICENAME + ' <' + S_MAIL + '>',
        to: mails,
        subject: S_MAILTHEME,
        text: S_MESSAGE,
        html: S_HTML
    };
    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log('Error occurred: ' + error.message);
            res.json('Error occurred: ' + error.message).status(404)
            return;
        }
        res.json('Message sent successfully: %s' + info.messageId).status(200)
    });
})

app.listen(PORT, () => open("http://localhost:3000"))