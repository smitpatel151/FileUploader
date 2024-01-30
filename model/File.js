const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require("dotenv").config();

const fileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    imageurl:{
        type: String,
    },
    tags:{
        type: String,
    },
    email:{
        type: String,
    }




});

fileSchema.post("save",async function (doc) {
    try{
        console.log("hello");
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },

        });

        let info = await transporter.sendMail({
            from:"onlineauction151@gmail.com",
            to:doc.email,
            subject:"Demo emails",
            html:"<h1>Demo</h1>",
        })
        console.log(info)
        console.log("bye");
    }catch(error){
        console.error(error);
        console.error("Error while sending emails")
    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;