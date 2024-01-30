# FileUploader Application

The FileUploader application is a backend service built with Node.js, Express, and MongoDB, designed to handle file uploads both locally and to the cloud using Cloudinary. This service offers a simple yet powerful solution for applications requiring file management capabilities.

## Features

* **Local File Upload**: Allows the uploading of files to the server's local file system, making it suitable for temporary storage or processing before further action.

* **Cloud Image Upload**: Supports uploading images directly to Cloudinary, providing a scalable and secure cloud storage solution.
  
* **Image Reduction and Upload**: Before uploading to the cloud, images can be resized, reducing their file size and optimizing them for web usage.
  
* **Video Upload**: Enables uploading videos to Cloudinary, catering to applications requiring video content management in the cloud.

## Getting Started

### Prerequisites

* Node.js and npm installed
* MongoDB running locally or accessible via a cloud instance
* Cloudinary account for cloud storage
* Postman or any other API testing tool for interacting with the endpoints

MONGO_URI=<your_mongodb_uri>
CLOUDINARY_URL=<your_cloudinary_url>

Add your database and cloudinary url

# API Endpoints

The application provides four primary endpoints for file management:

1. **Local File Upload**

* Endpoint: POST /localFileUpload
* Description: Uploads a file to the server's local filesystem.
* Payload: form-data with a key of file and the file you wish to upload.

2. **Cloud Image Upload**

* Endpoint: POST /imageUploader
* Description: Uploads an image to Cloudinary for cloud storage.
* Payload: form-data with a key of image and the image file you wish to upload.

3. **Image Reduction and Upload**

* Endpoint: POST /imageReducer
* Description: Reduces the size of an image before uploading it to Cloudinary.
* Payload: form-data with a key of image and the image file you wish to reduce and upload.

4. **Cloud Video Upload**

* Endpoint: POST /videoUpload
* Description: Uploads a video to Cloudinary for cloud storage.
* Payload: form-data with a key of video and the video file you wish to upload.


## Usage

To use the application, send requests to the provided endpoints using Postman or a similar API testing tool. Ensure that the request type is POST and the payload is encoded as form-data with the appropriate key-value pairs as described in the API Endpoints section.

## Contributing
Contributions are welcome! If you have suggestions for improvements or bug fixes, please open an issue or submit a pull request. Still we are working in the mail system.


