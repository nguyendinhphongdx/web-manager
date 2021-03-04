const Student = require('../Models/StudentModel');
const path = require('path');
const fs = require('fs');
const jsonInstance = require("../utils/JsonUtils");
const responeInstance = require("../utils/ResponeUtils");
const uploadStudent  =path.join('public/uploads/students/');
exports.addStudent = (req, res, next) => {
    let avatarStudent;
    let uploadPath;
    let image;
    if (req.files !== 0) {
        avatarStudent = req.files.file; // name of file
        image = new Date().getTime()+path.extname(avatarStudent.name);
        uploadPath = uploadStudent + image;
    }
    Student.findOne({email: req.body.email})
    .exec((err, student) => {
        if(student){ 
            responeInstance.error400(res, jsonInstance.jsonNoData('Student already exists'));
            return 
        }
        // Use the mv() method to place the file somewhere on your server
        const {name,password,age,email,status,description} = req.body;
        
        const __student = new Student({name,password,age,email,status,description,image});
        try {
            avatarStudent.mv(uploadPath)
            .then(() =>{
                __student.save()
                .then((student) =>{
                    responeInstance.success200(res, jsonInstance.toJsonWithData('SUCCESS',student ));
                    return 
                })
                .catch((error) =>{
                    console.log('error addStudent',error.message);
                    responeInstance.error400(res, jsonInstance.jsonNoData(error.message));
                })
            })
            .catch(err =>{
                throw new Error(err.message);
            })
        } catch (error) {
            throw new Error(error.message);
        }
    })
}
exports.Students = (req, res) =>{
    Student.find({})
    .exec((err, students) =>{
        if(err){
            responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
        }
        else
        responeInstance.success200(
            res,
            jsonInstance.toJsonWithData(`SUCCESS`, students)
          );
    })
}
exports.removeStudent = (req, res, next) => {
    Student.findByIdAndDelete(req.body._id)
    .then((student)=>{
        if(student){
            const oldPath = uploadStudent+ student.image; // old file
            if(fs.existsSync(oldPath)){
                fs.unlinkSync(oldPath)
              }else{
                responeInstance.error400(res, jsonInstance.jsonNoData('Not find Image in Server'));
              }
            responeInstance.success200(
                res,
                jsonInstance.toJsonWithData(`SUCCESS`, student)
              );
        } else{
            throw new Error('Student not found')
        }
        
    })
    .catch(err => {
        responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
    })
}
exports.updateStudent = (req, res, next) => {
    Student.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    .then((student)=>{
        if(student){
            responeInstance.success200(
                res,
                jsonInstance.toJsonWithData(`SUCCESS`, student)
              );
        } else{
            throw new Error('Student not found')
        }
    })
    .catch(err => {
        responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
    })
}
exports.changeAvatar = (req, res, next) => {
    let avatarStudent;
    let uploadPath;
    let image;
    if (req.files.file) { // check file is exist
        avatarStudent = req.files.file; // name of file
        image = new Date().getTime()+path.extname(avatarStudent.name);
        uploadPath = uploadStudent + image;
    }else{
        responeInstance.error400(res, jsonInstance.jsonNoData('Not find Image'));
        return
    }
    Student.findOne({_id:req.body._id}) // find student
    .then((student)=>{
        if(student){
            const oldPath = uploadStudent+ student.image; // old file
            const _student = {...student._doc,image:image};  // new student with new image
            console.log('new student',_student)
            try {
                if(fs.existsSync(oldPath)){
                fs.unlinkSync(oldPath)
                }else{
                responeInstance.error400(res, jsonInstance.jsonNoData('Not find Image in Server'));
                }
                avatarStudent.mv(uploadPath) // copy file
                .then(()=>{
                Student.findOneAndUpdate({_id: req.body._id},_student,{new: true})
                .then((student)=>{
                    responeInstance.success200(
                        res,
                        jsonInstance.toJsonWithData(`SUCCESS`, student)
                        );
                })
                })
            } catch (error) {
                responeInstance.error400(res, jsonInstance.jsonNoData(error.message));
                return
            }
        } else{
            throw new Error('Student not found')
        }
    })
    .catch(err => {
        responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
    })
}