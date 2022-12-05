require('dotenv').config();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

module.exports = function() {
    mongoose.connect(process.env.REMOTE_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Database connected!!"))
        .catch((err) => {
            throw console.log(err)
        });
}

// fdlSecureCloud

// mbtd6JLjg7JtyFL