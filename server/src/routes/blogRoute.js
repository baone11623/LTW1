const express = require("express");
const router = express.Router();

const blogController = require("../Controller/blogController");

router.post("/create-blog", blogController.createBlog);

module.exports = router;
