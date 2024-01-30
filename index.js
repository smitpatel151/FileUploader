const express = require('express');
const connectDB = require("./config/database");
const cloudinary = require('./config/cloudinary');

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;


app.use(express.json())
const fileupload = require("express-fileupload")
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

connectDB.connectDB();
cloudinary.cloudinaryConnect();

const Upload = require("./route/fileUpload")
app.use("/api/v1/upload",Upload);

app.listen(PORT, () =>{
    console.log("listening on port = "+PORT);
})







