# Sender of default messages to list of users

[![wakatime](https://wakatime.com/badge/github/viktor-kindrat/nodemailer.svg)](https://wakatime.com/badge/github/viktor-kindrat/nodemailer)

### Test here: https://nodemailer-ghe1.onrender.com/

### How to use:
- Download this repo into your computer, extract it and check if npm and node js are installed by commands

```
node -v
npm -v
```

- Create text file `.env` in extracted folder and fill it like this

```
S_MAIL = "Your email here"
S_PASS = "Your password here"
S_HOST = "SMPT hosting server adress"
S_PORT = "Port to SMPT hosting server"
```
P.S. for Gmail SMPT server is `smtp.gmail.com`, port is `587`. You can get it from your mail service provider

- Install required modules useing command on terminal
```
npm i express
npm i body-parser
npm i nodemailer
npm i dotenv
npm i open
```

- Then open folder with extracted repo in terminal and run it useing

```
node app
```

- Enter required data in inputs and uploud `.txt` file with needed emails to dashed zone.

P.S. File should be formated like this:

```
mail@mail.com
anothermail@mail.com
anothermail1@mail.com
```

- Click "Send emails"

- Wait for response of server
