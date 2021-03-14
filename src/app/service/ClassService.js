const ArrayService = require("./ArrayService");
const MarkService = require("./MarkService");
const StudentService = require("./StudentService");
class ClassService{
    totalByClass(arrayClass){
        var dataChart =[];
        dataChart = arrayClass.map(_class =>{
            return {
                name:'Total',
                class:`${_class.name}`,
                value:`${_class.member.length}`}
        })
        return dataChart;
    }
    MarkByClass(arrayClass,arrayStudent){
        var result = [];
       for (let index = 0; index < arrayClass.length; index++) {
            result.push(getMarkClass(arrayClass[index].member,arrayStudent,arrayClass[index].name));
       }
        return result;
    }
    removeWithId(array,id){
       const member = array.member.filter(item=>JSON.stringify(item)!==JSON.stringify(id))
       return{
            ...array._doc,
            member:member
       }
    }
}
function getMarkClass(members,students,name){
    const membersInClass = members.map(idMember =>{
        var student = students.find(item=>JSON.stringify(item._id)===JSON.stringify(idMember));
        return student
    })
    var dataMark={
        name:'Mark',
        class:`${name}`,
        value:`${countMarkClas(membersInClass)}`
    }
   return dataMark;
}
function countMarkClas(membersInClass){
    var total =0;
    membersInClass.forEach(member => total += Number(StudentService.avgMarkStudent(member).mark));
    return (Number(total)/membersInClass.length).toFixed(1);
}

module.exports = new ClassService();