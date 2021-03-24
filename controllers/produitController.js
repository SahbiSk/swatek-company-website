const Produit = require("../models/produit");

exports.updateProduit = async (req, res) => {
  try {
    const id = req.params.id;
    const produitlocale = await Produit.findById(id);

    var produitupdated = new Produit({
      icon: req.file.icon,
      name: req.body.name,
      description: req.body.description,
    });
    if (produitupdated.name == null) {
      produitupdated.name = produitlocale.name;
    }

    if (produitupdated.icon == null) {
      produitupdated.icon = produitlocale.icon;
    }

    if (produitupdated.description.length == 0) {
      produitupdated.description = produitlocale.description;
    }

    const resultf = await Produit.updateOne(
      { _id: id },
      {
        $set: {
          icon: produitupdated.icon,
          name: produitupdated.name,
          description: produitupdated.description,
        },
      }
    );

    res.status(200).send({ alarm: "product updated", resultf });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.createProduit = async (req, res) => {
  const { name, description } = req.body;

  try {
    const partenaire = new Produit({
      name,
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

exports.getProduits = async (req, res) => {
  try {
    const result = await Produit.find();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteProduit = async (req, res) => {
  try {
    const id = req.params.id;
    const resultat = await Produit.deleteOne({ _id: id });
    res.status(200).send({ alarm: "product deleted", resultat });
  } catch (err) {
    res.status(400).send(err.message);
  }
};
