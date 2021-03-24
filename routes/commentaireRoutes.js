const router = require("express").Router();

const { secure } = require("../controllers/authControllers");
const {
  addCommentaire,
  getCommentaires,
  deleteCommentaire,
} = require("../controllers/commentaireControllers");

router.post("/create", addCommentaire);
router.use(secure);
router.get("/commentaires", getCommentaires);
router.delete("/delete/:id", deleteCommentaire);

module.exports = router;
