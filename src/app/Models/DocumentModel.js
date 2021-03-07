const mongoose = require('mongoose');
const ProfessorModel = require('./ProfessorModel');

const DocumentSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
   },
   type:{
       type: String,
       required: true,
    },
    size:{type: Number},
    description:{type: String},
    auth:{type: mongoose.Schema.Types.ObjectId, required: true},
    image:{type: String}
},{ timestamps:true });

module.exports = mongoose.model('Document',DocumentSchema);