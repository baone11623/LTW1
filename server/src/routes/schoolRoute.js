const express = require("express");
const router = express.Router();

const schoolController = require("../Controller/schoolController");
const middleWareUser = require("../Middleware/middleware");

router.post("/create-school", middleWareUser ,schoolController.createSchool);
router.put("/update-school",middleWareUser ,schoolController.updateSchool);
router.delete("/delete-school", middleWareUser,schoolController.deleteSchool);

module.exports = router;
