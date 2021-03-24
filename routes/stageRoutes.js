const express = require("express");
const router = express.Router();
const {
  addStage,
  getStage,
  DeleteStage,
  DeleteAllStages,
  updateStage,
  getAllStages,
} = require("../controllers/stageControllers");
const { secure } = require("../controllers/authControllers");

router.get("/getStage/:id", getStage);

router.get("/getAllStages", getAllStages);

router.use(secure);

router.post("/addStage", addStage);

router.delete("/deleteStage/:id", DeleteStage);

router.delete("/deleteAllStages", DeleteAllStages);

router.patch("/updateStage/:id", updateStage);

module.exports = router;
