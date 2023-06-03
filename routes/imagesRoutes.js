const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'avatar',
    format: async (req, file) => 'png', // supports promises as well
      },
});

const profileImgUpload = multer({
  storage: storage,
});

const {
  InmatePhotos,

} = require('../controller/images');

router
  .route('/employee/:id/:projectname')
  .post(profileImgUpload.single('images'), InmatePhotos);



module.exports = router;
