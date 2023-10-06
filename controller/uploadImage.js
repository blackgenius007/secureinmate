const Inmate = require('../models/Inmates');

module.exports.UploadImage = async (req, res) => {    
  const imagePath = req.file.path;
console.log(imagePath);
  try {
    const result = await Inmate.updateOne({}, { $set: { imagePath } });

    if (result.nModified === 0) {
      // If no records were modified, create a new record
      await Inmate.create({ imagePath });
    }

    res.status(200).json({
      message: 'Image upload successful',
      status: 'success',
      imagePath,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Image upload failed. Error: ${error.message}`,
      status: 'error',
    });      
  }
};


// module.exports.UploadImage = async (req, res) => {
//   const imageUploaded = new ImageSchema({
//     image: req.file.path,
//   });

//   try {    
//     await imageUploaded.save();
//   } catch (error) {
//     return res.status(400).json({
//       message: `image upload failed, check to see the ${error}`,
//       status: "error",
//     });
//   }
// };