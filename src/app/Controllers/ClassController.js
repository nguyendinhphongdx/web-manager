const jsonInstance = require("../utils/JsonUtils");
const responeInstance = require("../utils/ResponeUtils");
const ClassModel = require('../Models/ClassModel');
const SubjectModel = require('../Models/SubjectModel');
const ProfessorModel = require('../Models/ProfessorModel');
const StudentModel = require('../Models/StudentModel');
const StudentService = require("../service/StudentService");
const ArrayService = require("../service/ArrayService");
const ClassService = require("../service/ClassService");
exports.addClass = (req, res, next) => {
    ClassModel.findOne({name: req.body.name})
    .exec((err,item) => {
        if(item){ 
            responeInstance.error400(res, jsonInstance.jsonNoData('Class already exists'));
            return 
        }
        const {name,_idSubject,_idFrofessor,status,startDate,schedule1,schedule2} = req.body;
        var _subject,_frofessor;
        if(_idSubject){
            SubjectModel.findById(_idSubject)
            .then((subject)=>{
                _subject=subject;
            })
        }
        if(_idFrofessor){
            FrofessorModel.findById(_idFrofessor)
            .then((frofessor)=>{
                _frofessor=frofessor;
            })
        }
        const __class = new ClassModel({name,_subject,_frofessor,status,startDate,schedule1,schedule2});
        __class.save()
        .then((newClass) =>{
            responeInstance.success200(res, jsonInstance.toJsonWithData('SUCCESS',newClass ));
            return 
        })
        .catch((error) =>{
            console.log('error add newClass',error.message);
            responeInstance.error400(res, jsonInstance.jsonNoData(error.message));
        })
    })
}
exports.Classes = (req, res) =>{
    ClassModel.find({})
    .exec((err, classes) =>{
        if(err){
            responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
        }
        else
        responeInstance.success200(
            res,
            jsonInstance.toJsonWithData(`SUCCESS`, classes)
          );
    })
}
exports.removeClass = (req, res, next) => {
    ClassModel.findByIdAndDelete(req.body._id)
    .then((_class)=>{
        if(_class){
            responeInstance.success200(
                res,
                jsonInstance.toJsonWithData(`SUCCESS`, _class)
              );
        } else{
            responeInstance.error400(res, jsonInstance.jsonNoData('Not find _class'));
        }
    })
    .catch(err => {
        responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
    })
}
exports.updateClass = (req, res, next) => {
    const {name,_idSubject,_idProfessor,status,startDate,schedule1,schedule2} = req.body;
    console.log(_idProfessor,_idSubject);
    ClassModel.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    .then((_class)=>{
        if(_class){
            responeInstance.success200(
                res,
                jsonInstance.toJsonWithData(`SUCCESS`, _class)
              );
        } else{
            throw new Error('_class not found')
        }
    })
    .catch(err => {
        responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
    })
}
exports.assignProfessor = (req, res, next) => {
    const {_idProfessor} = req.body;
    ProfessorModel.findById(_idProfessor)
    .then((professor)=>{
        ClassModel.findOneAndUpdate({_id:req.body._id},{professor:[{...professor}]},{new:true})
        .then((_class)=>{
            if(_class){
                responeInstance.success200(
                    res,
                    jsonInstance.toJsonWithData(`SUCCESS`,_class)
                );
            } else{
                throw new Error('_class not found')
            }
        })
        .catch(err => {
            responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
        })
    })
    .catch((err)=>{
        responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
    })
}
exports.addMember = (req, res, next) => {
    const {_idStudent} = req.body;
    StudentModel.findById(_idStudent)
    .then((student)=>{
        if(!student){
            throw new Error('Student not found')
        }
        ClassModel.findById(req.body._id)
        .then((_class)=>{
            if(_class){
                if(ArrayService.isExistWithId(_class.member,student._id)){
                    throw new Error('Student already exists in Class')
                }
                student.class.push(_class._id); // student added class
               _class.member.push(student._id);
               ClassModel.findByIdAndUpdate({_id:req.body._id},_class,{new:true}) //add student to member
               .then((_newClass)=>{
                StudentModel.findByIdAndUpdate({_id:student._id},student,{new:true}) // update student added class
                        .then((student)=>{
                            responeInstance.success200(res, jsonInstance.toJsonWithData('SUCCESS1',_newClass));
                        })
               })
            } else{
                throw new Error('_class not found')
            }
        })
        .catch(err => {
            responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
        })
    })
    .catch((err)=>{
        responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
    })
    
}
exports.removeMember = (req, res, next) => {
    const {_idStudent,_id} = req.body;
    try {
        console.log(_idStudent);
        StudentModel.findById(_idStudent)
        .then(rstudent =>{
            if(!rstudent){
                throw new Error('Student not found')
            }
            ClassModel.findById(_id)
            .then(rclass=>{
                if(!rclass){
                    throw new Error('Class not found')
                }
                const newStudent = StudentService.removeWithId(rstudent,_id);
                const newClass = ClassService.removeWithId(rclass,newStudent._id);
                StudentModel.findByIdAndUpdate(_idStudent,newStudent,{new:true})
                .then((studentupdated) =>{
                    ClassModel.findByIdAndUpdate(_id,newClass,{new:true})
                    .then((classupdated) =>{
                        responeInstance.success200(res, jsonInstance.toJsonWithData('SUCCESS',classupdated));
                    })
                    .catch(error =>{
                        throw new Error(error.message);
                    })
                })
                .catch(error =>{
                    throw new Error(error.message);
                })
            })
            .catch(error =>{
                throw new Error(error.message);
            })
        })
        .catch(error =>{
            throw new Error(error.message);
        }) 
    } catch (error) {
        responeInstance.error400(res, jsonInstance.jsonNoData(error.message));
    }
    

}
exports.compareClass = (req, res)=>{
    StudentModel.find({})
    .then(students=>{
        if(students){
            ClassModel.find({})
            .then(_class=>{
                if(_class){
                    const dataTotal = ClassService.totalByClass(_class);
                    const dataMark = ClassService.MarkByClass(_class,students);
                    const merge = [...dataMark,...dataTotal];
                    responeInstance.success200(res, jsonInstance.toJsonWithArray('SUCCESS',merge));
                }else{
                    throw new Error('ClassModel not found')
                }
            })
            .catch(err => {throw new Error(err)})
        }else{
            throw new Error('students not found')
        }
    })
    .catch(err => {
        responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
    })
}
