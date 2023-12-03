const express = require("express");
const router = express.Router();

const blogController = require("../Controller/blogController");
const middleWareUser = require("../Middleware/middleware");

router.post(
  "/create-blog",
  middleWareUser.verifyToken,
  blogController.createBlog
);
router.get("/get-blog", blogController.getBlog);
router.get("/details-blog", blogController.details);
router.put(
  "/update-blog",
  middleWareUser.verifyToken,
  blogController.updateBlog
);
router.delete(
  "/delete-blog",
  middleWareUser.verifyToken,
  blogController.deleteBlog
);

module.exports = router;
