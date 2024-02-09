const mongoose = require('mongoose');
const {schema} = mongoose

const {serviceSchema} = require('./service');

const festaSchema = new Schema({  
    titulo: {
        type: String,
        required: true,
    },

    descricao: {
        type: String,
        required: true,
    },
    orcamento: {
        type: Number,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    },
    services: {
        type: [serviceSchema],
    },    
} ,
{timestamps:true}

);

const festa = new mongoose.model('Festa', festaSchema);
module.exports = festa;