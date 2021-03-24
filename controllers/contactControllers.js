const Contact = require("../models/contact");

exports.addContact = async (req, res) => {
  const commentaire = new Contact({
    message: req.body.message,
    name: req.body.name,
    email: req.body.email,
    sujet: req.body.sujet,
  });
  try {
    const savedContact = await commentaire.save();
    res.status(201).json({
      status: "success",
      data: savedContact,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const result = await Contact.find();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const resultat = await Contact.deleteOne({ _id: id });
    res.status(200).json({ alarm: "contact deleted", data: resultat });
  } catch (err) {
    res.status(400).send(err.message);
  }
};
