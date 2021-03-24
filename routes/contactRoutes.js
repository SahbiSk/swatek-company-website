const router = require("express").Router();

const {
  addContact,
  getContacts,deleteContact
} = require("../controllers/contactControllers");

router.post("/create", addContact);
router.get("/contacts", getContacts);
router.delete("/delete/:id", deleteContact);

module.exports = router;
