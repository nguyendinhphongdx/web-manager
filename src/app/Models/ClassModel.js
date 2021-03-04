const mongoose = require('mongoose');
const ProfessorModel = require('./ProfessorModel');
const StudentModel = require('./StudentModel');
const SubjectModel = require('./SubjectModel');
const ClassSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
       min:3
   },
   total:{
       type: Number,
       default:0
    },
    subject:{type: SubjectModel.schema,default:{}},
    member:{type:[StudentModel.schema],default:[]},
    professor:{type: [ProfessorModel.schema],default:[]},

    status:{
        type: String,
        enum: ['actived','blocked'],
        default:'actived'
    },
    startDate:{type: Number, default:Date.now().valueOf()},
},{ timestamps:true });


module.exports = mongoose.model('Class',ClassSchema);