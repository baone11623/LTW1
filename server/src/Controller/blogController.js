const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const blogModel = require("../Models/blogModel");

const blogController = {
  createBlog: async (req, res) => {
    try {
      const { title, content, school, adProduct, comment } = req.body;
      //   if (!title || !content || !schoole || !adProduct) {
      //     return res
      //       .status(401)
      //       .json({ success: false, message: "Please complete all information" });
      //   }
      const result = await blogModel.create({
        title: title,
        content: content,
        school: school,
        adProduct: adProduct,
      });
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error creating blog" });
    }
  },

  getBlog: async (req, res) => {
    try {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const results = {};
      const dataLength = await blogModel.find({});
      //   console.log(page);
      starExplore = (page - 1) * limit;
      endExplore = page * limit;
      // console.log(dataLength.length);
      if (endExplore < dataLength.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (starExplore > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      results.results = await blogModel
        .find({})
        .populate("school", ["name", "address", "schoolSupplies", "image"])
        .sort({ $natural: -1 })
        .limit(limit)
        .skip(starExplore)
        .exec();
      return res.status(200).json({ success: true, results });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error get explore" });
    }
  },

  updateBlog: async (req, res) => {
    try {
      const { blogId, title, content } = req.body;
      console.log(blogId, title, content);
      await blogModel.updateOne(
        { _id: blogId },
        { title: title, content: content }
      );

      return res
        .status(200)
        .json({ success: true, message: "Updated blog successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error updating blog" });
    }
  },

  deleteBlog: async (req, res) => {
    try {
      const { blogId } = req.body;
      await blogModel.deleteOne({ _id: blogId });
      return res
        .status(200)
        .json({ success: true, message: "Delete blog successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: true, message: "Error deleting blog" });
    }
  },
  details: async (req, res) => {
    try {
      const detailID = req.query.detailID;
      const isValidObjectId = ObjectId.isValid(detailID);
      if (!isValidObjectId) {
        return res.status(400).json({ success: false, message: "Invalid ID" });
      }
      const result = await blogModel
        .findById({ _id: detailID })
        .populate("school", ["name", "address", "schoolSupplies", "image"]);
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error getting details" });
    }
  },
};

module.exports = blogController;
