# SECURE CLOUD API
This nodeJS project is about the nodejs API for the project of secure cloud

## Environment variables

NODE_ENV='development'

APP_NAME='Secure Cloud'
APP_PORT=3000
APP_URL='http://localhost:3000/'

REMOTE_DB_URI='****************' 

BCRYPT_SALT_ROUND=XX

JWT_SECRET='****************'

SECURE_CLOUD_LOCATION='https://drive.google.com/drive/folders/1SsljVwT2wA4p5PONJzw82repIII33HwW?usp=sharing'

MAIL_HOST=fake host
MAIL_PORT=XXX
MAIL_USER='fake user'
MAIL_PASSWORD='fake password'

## Database structure

I used a MongoDb database with the mongoose driver via npm package named 'mongoose'

### Collections

I need to store users 

* usersCollection : the users 
    {
        
        email: String,
        password: String hashed with bcrypt,
        verified : Bolean,
        emailValidationToken: String to validare user email after registration,
    }


## Middlewares
In this application I have 02 middlewares

#### auth
This middleware is about authentication of users

*Check if there is the header x-auth-token
*Verify it and continue the request 
*If it is a invalid token or there is not x-auth-token ,the request is does not pass

#### userRequestValidator 
This middleware is about assert the body of request is well formated

#### emailVerified 
This middleware is about assert if user is verified



## Routes

### users.ts
Base url : /api/user

| Verb  | Url              | Actions                                           |Middlewares|
|-------|------------------|---------------------------------------------------|-------------|
| POST   | /register       |Create a new user. Body = {email,password}    |None|
| POST   | /login      |Log a user. Body = { email, password }  |None|
| POST   | /verifyEmail/:token      |Verify user email by setting verified to true. Body = { email, password }  |None|

### ressources.ts
Base url : /api/getRessource

| Verb  | Url              | Actions                                           |Middlewares|
|-------|------------------|---------------------------------------------------|-------------|
| GET   | /:token       |Redirect to cloud ressource   |Auth , EmailVerified|


## Mailing (using nodemailer)
-Located in the Mail directory.In the index.js file is set all parameters to send mail with nodemailer.
-The validateEmail.js export the message to send validation mail

## Somes helpers
They are located at the ./utils/helpers.js 

#### sign.js
Is about signing datas to get jwt token using the {email,verified} of user

#### getRessourceLink.js
Is about link to send back client and which will be used to generate qrcode on client side

#### getEmailVerificationLink.js
Is about link to send to user in validation mail









