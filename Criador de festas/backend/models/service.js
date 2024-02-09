const mongoose = require('mongoose');
const { type } = require('os');
 const { Schema } = mongoose;
 const serviceSchema = new Schema({ 
    nome: {type : String, required: true},
     descricao:{type :String },
     orcamento:{type:Number ,required:true},
    img:{type:String, required:true},
    
 } ,{timestamps:true});
 

 const  Service  = mongoose.model('Service', serviceSchema);

 module.exports = {
    Service,
    serviceSchema,
 };