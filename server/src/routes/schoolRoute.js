const express = require("express");
const router = express.Router();

const schoolController = require("../Controller/schoolController");

router.post("/create-school", schoolController.createSchool);
router.put("/update-school", schoolController.updateSchool);
router.delete("/delete-school", schoolController.deleteSchool);

module.exports = router;
