require('dotenv').config()
const express = require('express')
const app = express()

const users = require('./routes/users')

app.use('/api/user', users)


const PORT = process.env.NODE_ENV == 'development' ? process.env.APP_PORT : process.env.PORT

app.listen(PORT, () => {
    console.log(process.env.APP_NAME + ' is listenig on port ' + PORT)
})