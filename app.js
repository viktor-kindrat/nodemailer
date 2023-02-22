const open = require("open")

const nodemailer = require('nodemailer');
require("dotenv").config();
let { S_MAIL, S_PASS, S_HOST, S_PORT, S_SECURE } = process.env;
let transporter = nodemailer.createTransport({
    host: S_HOST,
    port: S_PORT,
    secure: S_SECURE,
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
    let mails = req.body.data.join(", ")
    let name = req.body.name;
    let text = req.body.message;
    let theme = req.body.theme;
    let message = {
        from: name + ' <' + S_MAIL + '>',
        to: mails,
        subject: theme,
        html: text,
    };
    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log('Error occurred: ' + error.message);
            res.json('Error occurred: ' + error.message).status(404)
            return;
        }
        res.json('Message sent successfully').status(200)
    });
})

app.listen(PORT, () => open("http://localhost:" + PORT))