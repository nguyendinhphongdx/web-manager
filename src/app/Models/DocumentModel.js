const mongoose = require('mongoose');
const SubjectModel = require('./SubjectModel');

const DocumentSchema = new mongoose.Schema({
    title: {type: String,required: true},
    subject:{type: [SubjectModel.schema],default:[]},
    auther:{type: [mongoose.Schema.Types.ObjectId],default:[]},
    status:{
        type: String,
        enum: ['actived','blocked'],
        default:'actived'
    },
    type:{type:String},
    date:{type: Number, default: Date.now().valueOf()},
},{ timestamps:true });

module.exports = mongoose.model('Document',DocumentSchema);