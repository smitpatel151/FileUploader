const mongoose = require('mongoose');

require("dotenv").config();

exports.connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL).then(
        console.log("Connection with database is established.")
    ).catch((error) => {
        console.log("Having an error occurred with database connection.")
        console.error(error);
        process.exit(1);
    })
}