const Commentaire = require("../models/commentaire");

exports.addCommentaire = async (req, res) => {
  const commentaire = new Commentaire({
    message: req.body.comment,
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const savedCommentaire = await commentaire.save();
    res.status(200).json({
      status: "success",
      data: savedCommentaire,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getCommentaires = async (req, res) => {
  try {
    const result = await Commentaire.find();
    res.status(200).json({ message: result, data: result });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteCommentaire = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Commentaire.deleteOne({ _id: id });
    result
      ? res.status(201).json({
          message: "Success",
          deletedData: result,
        })
      : res.status(404).message({ message: "No element has the given id" });
  } catch (error) {
    let errorHandled = error;
    if (error.name === "MongoError") errorHandled = DBError(error);

    res.status(400).json({ message: errorHandled.message });
  }
};
