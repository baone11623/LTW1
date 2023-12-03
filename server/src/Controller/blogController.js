const blogModel = require("../Models/blogModel");

const blogController = {
  createBlog: async (req, res) => {
    try {
      const { title, content, schoole, adProduct, comment } = req.body;
      //   if (!title || !content || !schoole || !adProduct) {
      //     return res
      //       .status(401)
      //       .json({ success: false, message: "Please complete all information" });
      //   }
      const result = await blogModel.create({
        title: title,
        content: content,
        schoole: schoole,
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
      results.results = await blogModel.find({})
        .populate("school", ["name", "address", "schoolSupplies", "image"])
        .populate({
          path: "comment",
          populate: { path: "author", select: "username avatar" },
        })
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
};

module.exports = blogController;
