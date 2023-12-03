require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "dsvpomkeg",
  api_key: process.env.API_KEY || "748898497387152",
  api_secret: process.env.API_SECRET || "VciLfNxK96COpy7JeJPk107axpg",
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

const uploadImage = async (image) => {
  try {
    // console.log(image);
    const result = await cloudinary.uploader.upload(image.tempFilePath, opts);
    // console.log(result);
    return result.secure_url;
  } catch (error) {
    return error;
  }
};

const uploadMultipleImages = async (images) => {
  // console.log(images);
  return new Promise((resolve, reject) => {
    // console.log(images);
    const uploads = images.map((image) => uploadImage(image));
    // console.log(uploads);
    Promise.all(uploads)
      .then((values) => resolve(values))
      .catch((err) => reject(err));
  });
};

module.exports = {
  uploadImage,
  uploadMultipleImages,
};
