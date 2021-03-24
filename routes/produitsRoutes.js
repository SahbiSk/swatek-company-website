const fileUpload = require("../middlewares/file-upload");
const routerProduit = require("express").Router();
const {
  updateProduit,
  createProduit,
  getProduits,
  deleteProduit,
} = require("../controllers/produitController");

routerProduit.post("/create", fileUpload.single("image"), createProduit);

routerProduit.get("/all", getProduits);

routerProduit.patch("/update/:id", updateProduit);

routerProduit.delete("/delete/:id", deleteProduit);

module.exports = routerProduit;
