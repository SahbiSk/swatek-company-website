const router = require("express").Router();
const fileUpload = require("../middlewares/file-upload");

const {
  addPartenaire,
  getPartenaires,
  deletePartenaire,
} = require("../controllers/partenaireController");

router.post("/add", fileUpload.single("image"), addPartenaire);

router.get("/all", getPartenaires);

router.delete("/delete/:id", deletePartenaire);
module.exports = router;
