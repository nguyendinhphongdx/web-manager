const Student = require('../Models/StudentModel');
const DocumemtModel = require('../Models/DocumentModel');
const path = require('path');
const fs = require('fs');
const jsonInstance = require("../utils/JsonUtils");
const responeInstance = require("../utils/ResponeUtils");
const ProfessorModel = require('../Models/ProfessorModel');
const uploadDocumemt  =path.join('public/uploads/document/');
exports.uploadDocumemt = (req, res) => {
    if (req.files == null) {
        responeInstance.error400(res, jsonInstance.jsonNoData('Not find file'));
        return
    }
    const fileDocument = req.files.file; // name of file
    const image = new Date().getTime()+path.extname(fileDocument.name);
    const uploadPath = uploadDocumemt + image;
    const {name,description,_idAuth} = req.body;
    DocumemtModel.findOne({name})
    .exec((err, document) => {
        if(document){ 
            responeInstance.error400(res, jsonInstance.jsonNoData('Name already exists'));
            return 
        }
        ProfessorModel.findById(_idAuth)
        .then((professor)=>{
            if(!professor){
                throw new Error('professor not found');
            }
            try {
                const type = path.extname(fileDocument.name).split('.')[1];
                const size = fileDocument.size;
                console.log(professor);
                 const __document = new DocumemtModel({name,description,auth:_idAuth,type,size,image});
                fileDocument.mv(uploadPath)
                .then(() =>{
                    __document.save()
                    .then((document) =>{
                        responeInstance.success200(res, jsonInstance.toJsonWithData('SUCCESS',document));
                        return 
                    })
                    .catch((error) =>{
                        throw new Error(error.message);
                    })
                })
                .catch(err =>{
                    throw new Error(err.message);
                })
            } catch (error) {
                throw new Error(error.message);
            }
        })
        .catch((err)=>{
            responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
        })
    })
}
exports.Documents = (req, res) =>{
    DocumemtModel.find({})
    .exec((err, documents) =>{
        if(err){
            responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
        }
        else
        responeInstance.success200(
            res,
            jsonInstance.toJsonWithData(`SUCCESS`, documents)
          );
    })
}
exports.removeDocument = (req, res, next) => {
    DocumemtModel.findByIdAndDelete(req.body._id)
    .then((document)=>{
        if(document){
            const oldPath = uploadDocumemt+ document.image; // old file
            if(fs.existsSync(oldPath)){
                fs.unlinkSync(oldPath)
              }else{
                responeInstance.error400(res, jsonInstance.jsonNoData('Not find Image in Server'));
              }
            responeInstance.success200(
                res,
                jsonInstance.toJsonWithData(`SUCCESS`, document)
              );
        } else{
            throw new Error('document not found')
        }
        
    })
    .catch(err => {
        responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
    })
}
exports.updateDocument = (req, res, next) => {
    DocumemtModel.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    .then((document)=>{
        if(document){
            responeInstance.success200(
                res,
                jsonInstance.toJsonWithData(`SUCCESS`, document)
              );
        } else{
            throw new Error('document not found')
        }
    })
    .catch(err => {
        responeInstance.error400(res, jsonInstance.jsonNoData(err.message));
    })
}
