const express = require("express");
const router = express.Router();

const schoolController = require("../Controller/schoolController");
const middleWareUser = require("../Middleware/middleware");

router.post(
  "/create-school",
  schoolController.createSchool
);
router.put(
  "/update-school",
  middleWareUser.verifyToken,
  schoolController.updateSchool
);
router.delete(
  "/delete-school",
  middleWareUser.verifyToken,
  schoolController.deleteSchool
);

module.exports = router;
