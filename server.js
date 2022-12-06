require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const dbConnection = require('./utils/dbConnect')

dbConnection()

const users = require('./routes/users')
const ressources = require('./routes/ressources')



app.use('/api/user', users)
app.use('/api/getRessource', ressources)





const PORT = process.env.NODE_ENV == 'development' ? process.env.APP_PORT : process.env.PORT

app.listen(PORT, () => {
    console.log(process.env.APP_NAME + ' is listenig on port ' + PORT)
})