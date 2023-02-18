# nodemailer

### How to use:
- Download this repo into your computer and check if npm and node js are installed by commands

```
node -v
npm -v
```

- Create `.env` file in project folder and fill it like this

```
S_MAIL = "your-email-here"
S_PASS = "your-email-account-password-here"
S_MESSAGE = "Message that you want to share"
S_HTML = "HTML of this message"
S_MAILTHEME = "Theme of the letter"
S_SERVICENAME = "Name that will be displayed"
S_HOST = "SMPT host name"
S_PORT = "Port of your mail host service"
```

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

- After that open `http://localhost:3000` on your web browser

- Enter first needed email on input. If you need more emails to be sent, click "Add other email"

- Click "Send emails"

- Wait for response of server
