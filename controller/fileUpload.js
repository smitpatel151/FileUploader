const File = require("../model/File")
const cloudinary = require("cloudinary").v2

exports.localFileUpload = async (req,res) => {
    try{
        const files = req.files.file;
        console.log(files)

        let path = __dirname + "/File/" + Date.now() + `.${files.name.split('.')[1]}`;
        console.log("path--->"+path);

        files.mv(path, (error)=>{
            console.log(error);
        })


        res.json({
            success: true,
            message: "File is uploaded successfully.",

        })


    }catch(error) {
        console.log(error);
    }
}

async function uploadFileCloudinary(file, folder, quality)
{
    let options = {folder}
    options.resource_type = "auto"
    if(quality){
        options.quality = quality
    }
    console.log("File temp path = "+file.tempFilePath)
    return await cloudinary.uploader.upload(file.tempFilePath,options)
}

exports.imageUploader = async (req,res) => {
    try{
        const {name,tags, email} = req.body;
        const file = req.files.imageFile;
        console.log(file)
        console.log(name, tags, email)
        const supportedExtensions = ["jpg", "png", "jpeg"]
        const fileExtension = file.name.split('.')[1]

        if(!(supportedExtensions.includes(fileExtension)))
        {
            return res.status(400).json({
                success: false,
                message: "Invalid file extension",
            })
        }
        const response =  uploadFileCloudinary(file, "fileUploader")
        console.log(response)
        
        const fileData = await File.create({
            name:name,
            tags:tags,
            email:email,
            fileurl: response.secure_url
        })

        return res.status(200).json({
            success: true,
            message: "Image is uploaded successfully",
        })


    }catch(error){
        console.log(error);
        console.log("Error in the image upload")
    }
}

exports.videoUpload = (req,res) => {
    try{
        const {name,tags, email} = req.body;
        const file = req.files.videoFile;
        console.log(file)
        console.log(name, tags, email)
        const supportedExtensions = ["mp4", "mov"]
        const fileExtension = file.name.split('.')[1]

        if(!(supportedExtensions.includes(fileExtension)))
        {
            return res.status(400).json({
                success: false,
                message: "Invalid file extension",
            })
        }
        let response =  uploadFileCloudinary(file, "fileUploader",30)
        console.log(response)

        const fileData =  File.create({
            name:name,
            tags:tags,
            email:email,
            fileurl: response.secure_url
        })

        return res.status(200).json({
            success: true,
            message: "Video is uploaded successfully",
        })

    }catch(error){
        console.log(error);
        console.log("Error in the video upload")
    }
}


exports.imageReducer = (req,res) => {
    try{
        const {name,tags, email} = req.body;
        const file = req.files.reduceImageFile;
        console.log(file)
        console.log(name, tags, email)
        const supportedExtensions = ["jpg", "png", "jpeg"]
        const fileExtension = file.name.split('.')[1]

        if(!(supportedExtensions.includes(fileExtension)))
        {
            return res.status(400).json({
                success: false,
                message: "Invalid file extension",
            })
        }
        let response =  uploadFileCloudinary(file, "fileUploader",80)
        console.log(response)

        const fileData =  File.create({
            name:name,
            tags:tags,
            email:email,
            fileurl: response.secure_url
        })

        return res.status(200).json({
            success: true,
            message: "Reduce image is uploaded successfully",
        })

    }catch(error){
        console.log(error);
        console.log("Error in the reduce image")
    }
}