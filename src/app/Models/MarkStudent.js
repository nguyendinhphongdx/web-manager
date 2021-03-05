const mongoose = require('mongoose');
const MarkStudent = new mongoose.Schema({
    subject:{type: SubjectModel.schema,default:{}},
    test:{type: {
        mark: {type: Number},
        date: {type: Date},
    }},
    middle:{type: {
        mark: {type: Number},
        date: {type: Date},
    }},
    final:{type: {
        mark: {type: Number},
        date: {type: Date},
    }},
    total:{type: Number},
},{ timestamps:true });

module.exports = mongoose.model('Mark',MarkStudent);