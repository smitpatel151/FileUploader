const express = require('express');
const router = express.Router();

const {localFileUpload,imageUploader,videoUpload,imageReducer} = require("../controller/fileUpload")



router.post("/localFileUpload", localFileUpload);
router.post("/imageUploader", imageUploader);
router.post("/videoUpload", videoUpload);
router.post("/imageReducer", imageReducer);

module.exports = router; 