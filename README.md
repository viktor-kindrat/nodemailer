# Sender of Default Messages to List of Users

[![wakatime](https://wakatime.com/badge/github/viktor-kindrat/nodemailer.svg)](https://wakatime.com/badge/github/viktor-kindrat/nodemailer)

## Test the Project

You can test the project at: https://nodemailer-ghe1.onrender.com/. However, please do not send too many messages at once.

### How to Use

Follow the steps below to use the project:

1. Download this repository to your computer and extract it. 
2. Check if Node.js and npm are installed by running the following commands:

```
node -v
npm -v
```

3. Create a text file named `.env` in the extracted folder and fill it as shown below:

```
S_MAIL = "Your email here"
S_PASS = "Your password here"
S_HOST = "SMTP hosting server address"
S_PORT = "Port to SMTP hosting server"
```

For Gmail, the SMTP server is `smtp.gmail.com`, and the port is `587`. You can get this information from your mail service provider.

4. Install the required modules using the following terminal commands:

```
npm i express
npm i body-parser
npm i nodemailer
npm i dotenv
npm i open
```

5. Open the folder with the extracted repository in the terminal and run it using the following command:

```
node app
```

6. Enter the required data in the inputs and upload a `.txt` file with the email addresses to the designated area. 

Note: The file should be formatted as follows:

```
mail@mail.com
anothermail@mail.com
anothermail1@mail.com
```

7. Click "Send emails."
8. Wait for the server's response.
