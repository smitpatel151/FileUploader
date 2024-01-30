const cloudinary = require("cloudinary").v2

exports.cloudinaryConnect = () =>{
    try{
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.SECRET_API_KEY ,
        })
    }catch(e){
        console.log("Cloudinary database connection error");
        console.error(e);
        process.exit(1);
    }
}