const Partenaire = require("../models/partenaire");

exports.addPartenaire = async (req, res) => {
  const { link, description } = req.body;

  try {
    const partenaire = new Partenaire({
      link,
      description,
      icon: req.file.path,
    });
    const result = await partenaire.save();
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getPartenaires = async (req, res) => {
  try {
    const result = await Partenaire.find();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deletePartenaire = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Partenaire.deleteOne({ _id: id });
    res.status(200).json({
      message: "deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
