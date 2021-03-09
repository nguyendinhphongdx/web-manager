const StudentModel = require("../Models/StudentModel");
const MarkService = require("./MarkService");

class StudentService{
     replaceArrayMark(origin,subject,type,mark){
         const isExist = origin.some((item) =>{
             return JSON.stringify(subject._id)==JSON.stringify(item.subject._id)
         })
         console.log(isExist);
        var newmap = [...origin];
        if(!isExist){ // không tìm thấy tồn tại subject
                console.log('subject needed new ',subject._id);
                console.log('type needed new ',type);
                switch(type){
                    case 'test': newmap.push({subject,test:{mark,date:new Date().getTime()}}); break;
                    case 'middle': newmap.push({subject,middle:{mark,date:new Date().getTime()}}); break;
                    case 'final': newmap.push({subject,final:{mark,date:new Date().getTime()}}); break;
                    default: break;
                }        
        }else{
            newmap = origin.map(item =>{
                if(JSON.stringify(subject._id)==JSON.stringify(item.subject._id)){
                    console.log('subject needed update ',subject._id);
                    console.log('type needed update ',type);
                    switch(type){
                        case 'test': item.test = {mark,date:new Date().getTime()}; break;
                        case 'middle': item.middle = {mark,date:new Date().getTime()}; break;
                        case 'final': item.final = {mark,date:new Date().getTime()}; break;
                        default: break;
                    }
                }
                return item;
            });
        }
        return newmap;
    }
      AsyncAddStudentToClass(_idStudent,Class){
          console.log( Array.isArray(Class));
          const newclass=[];
          newclass.push(Class);
        return   StudentModel.findByIdAndUpdate(_idStudent,{class:newclass},{ new: true})
          .then(student =>{
              if(student){
                return  student
              }
          })
     }
     removeWithId(array,id){
        const _class = array.class.filter(item=>JSON.stringify(item)!==JSON.stringify(id))
        return{
             ...array._doc,
            class:_class
        }
     }
    avgMarkStudent(student){
        var markClass =0;
        
        if(student.mark.length==0){
            return  {
                name:student.name,
                mark:0,
            };
        }else{
            const subjects = student.mark;
            subjects.forEach(subject=>{
                markClass+=MarkService.avgMark(subject);
            })
        }
        return {
            name:student.name,
            mark:markClass,
        }
    }
}
module.exports = new StudentService();
