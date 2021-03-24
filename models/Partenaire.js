const mongoose = require('mongoose');

const partenaireSchema = new mongoose.Schema({
    icon:{
        type: String ,
        required: true,
    },
    link:{
        type: String,
        required: true,
        min: 6
    },
    description:{
        type: String,
        required: true,
        min: 2
    }
});
module.exports= mongoose.model('Partenaire',partenaireSchema );