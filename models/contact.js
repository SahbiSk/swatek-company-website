const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
 
    message:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
        
    },
    email:{
        type: String,
        required: true,
    
    },
    sujet:{
        type: String,
        required: true,
    
    }
});

module.exports= mongoose.model('Contact',contactSchema );