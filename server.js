const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
//routes
const authRoutes = require("./routes/authRoutes");
//const { blackList } = require("./controllers/authControllers");
const stageRoutes = require("./routes/stageRoutes");
const commentaireRoutes = require("./routes/commentaireRoutes");
const contactRoutes = require("./routes/contactRoutes");
const routePartenaire = require("./routes/routePartenaire");
const produitsRoutes = require("./routes/produitsRoutes");
require("dotenv").config();

const app = express();
app.enable("trust proxy");


//hedhi na9alha ya amir
app.use(cors({ origin: "http://localhost:3000", credentials: true }));



app.use(express.json());
app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use(cookieParser());
//app.use(blackList("clearance"));
app.use("/api/v1/users", authRoutes);
app.use("/api/v1/stages", stageRoutes);
app.use("/api/v1/commentaires", commentaireRoutes);
app.use("/api/v1/contacts", contactRoutes);
app.use("/api/v1/partenaire", routePartenaire);
app.use("/api/v1/produit", produitsRoutes);

/**
app.use("/partenaire_uploads", express.static("partenaire_uploads"));
app.use("/product_uploads", express.static("produit_uploads"));
app.use("/galeries", express.static("galeries"));
 */
const port = process.env.PORT || 5000;
const db = process.env.DB;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((e) => console.log(e.message));

app.listen(port, () => console.log("server started at port ", port));
