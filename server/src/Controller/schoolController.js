// const School = require("../Models/schoolModel");
const schoolModels = require("../Models/schoolModel");
const { uploadImage } = require("../imageprocessing/uploadImages");

const schoolController = {
  createSchool: async (req, res) => {
    try {
      const { name, address, schoolSupplies, image } = req.body;
      console.log(name, address, schoolSupplies);
      if (!name || !address || !schoolSupplies || !image) {
        return res.status(401).json({
          success: false,
          message: "Please provide complete information",
        });
      }

      //   const photoPath = await uploadImage(image);
      const result = await schoolModels.create({
        name: name,
        address: address,
        // image: photoPath,
        image: image,
      });
      for (let item = 0; item < schoolSupplies.length; item++) {
        result.schoolSupplies.push(schoolSupplies[item]);
      }
      result.save();
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check the link" });
    }
  },
  getSchool: async (req, res) => {
    try {
      const result = await schoolModels.find();
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check the link" });
    }
  },

  updateSchool: async (req, res) => {
    const { schoolID, name, address, schoolSupplies, image } = req.body;
    const school = await schoolModels.findById({ _id: schoolID });
    if (schoolSupplies) {
      for (let i = 0; i < schoolSupplies.length; i++) {
        for (let j = 0; j < school.SchoolSupplies.length; j++) {
          if (school.SchoolSupplies[j] == !schoolSupplies[i]) {
            school.SchoolSupplies.pull(school.SchoolSupplies[j]);
            school.SchoolSupplies.push(school.SchoolSupplies[i]);
          }
        }
      }
      school.save();
      await schoolModels.updateOne(
        { _id: schoolID },
        { name: name, address: address, image: image }
      );
      return res
        .status(200)
        .json({ success: true, message: "updated successfully" });
    }
  },

  deleteSchool: async (req, res) => {
    try {
      const { schoolID } = req.body;
      await schoolModels.deleteOne({ _id: schoolID });
      return res
        .status(200)
        .json({ success: true, message: "deleted successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check the link" });
    }
  },
};

module.exports = schoolController;
