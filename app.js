const nodemailer = require('nodemailer');
require("dotenv").config();
let { S_MAIL, S_PASS } = process.env;
let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
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
        from: 'Test service <victorkindrat@hotmail.com>',
        to: mails,
        subject: 'Test Email',
        text: 'This is a test email sent from Node.js using nodemailer',
        html: `<b style="color: red">This is a test email</b>sent from Node.js using nodemailer`
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


app.listen(PORT, () => console.log(`server running on port ${PORT}`))