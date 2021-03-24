const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  secure,
  secretContent,
  isAdmin,
  // clearanceLevel,
} = require("../controllers/authControllers");

router.post("/login", login);

router.get("/logout", logout);

router.use(secure);
router.get("/secretContent", secretContent);

router.use(isAdmin);

router.post("/signup", signup);

//router.use(clearanceLevel("admin"))

module.exports = router;
