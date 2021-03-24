const Stage = require("../models/stage");
const DBError = require("../utils/DBError");

exports.addStage = async (req, res) => {
  const { title, reference, description, mots_clefs, profil } = req.body;
  try {
    const newStage = await Stage.create({
      title,
      reference,
      description,
      mots_clefs,
      profil,
    });
    res.status(201).json({
      status: "Success",
      data: newStage,
    });
  } catch (error) {
    let errorHandled = error;
    if (error.name === "MongoError") errorHandled = DBError(error);

    res.status(400).json({ message: errorHandled.message });
  }
};
exports.getStage = async (req, res) => {
  const id = req.params.id;
  try {
    const stage = await Stage.findById(id);
    stage
      ? res.status(200).json({
          status: "Success",
          data: stage,
        })
      : res.status(404).json({ message: "No element has the given id" });
  } catch (error) {
    let errorHandled = error;
    if (error.name === "MongoError") errorHandled = DBError(error);

    res.status(404).json({ message: errorHandled.message });
  }
};

exports.getAllStages = async (req, res) => {
  try {
    const stages = await Stage.find();
    stages
      ? res.status(200).json({
          status: "Success",
          data: stages,
        })
      : res.status(404).json({ message: "No data was found" });
  } catch (error) {
    let errorHandled = error;
    if (error.name === "MongoError") errorHandled = DBError(error);

    res.status(400).json({ message: errorHandled.message });
  }
};

exports.DeleteStage = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Stage.deleteOne({ _id: id });
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
exports.DeleteAllStages = async (req, res) => {
  try {
    const result = await Stage.deleteMany();
    result
      ? res.status(201).json({
          message: "Success",
          deletedData: result,
        })
      : res.status(404).message({ message: "No data was found" });
  } catch (error) {
    let errorHandled = error;
    if (error.name === "MongoError") errorHandled = DBError(error);

    res.status(400).json({ message: errorHandled.message });
  }
};
exports.updateStage = async (req, res) => {
  const id = req.params.id;
  const { title, reference, description, mots_clefs, profil } = req.body;
  let bodyReq = { title, reference, description, mots_clefs };

  let body = {};
  for (let i in bodyReq) {
    if (bodyReq[i]) {
      body[i] = bodyReq[i];
    }
  }
  if (profil[0] !== "") body["profil"] = profil;
  try {
    const result = await Stage.updateOne({ _id: id }, { ...body });
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    let errorHandled = error;
    if (error.name === "MongoError") errorHandled = DBError(error);
    res.status(400).json({ message: errorHandled.message });
  }
};
