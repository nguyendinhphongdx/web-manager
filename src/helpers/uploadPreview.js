export function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
export function devideCard(array){
  const nGroup = array.length/4;
  var newArray=[];
  for(var i=0; i<nGroup; i++){
    var coppyArray = [...array];
    var newE = coppyArray.slice(i*4, i*4+4);
    newArray.push(newE)
  }
  return newArray;
}
export function filterStudentInClass(members,students){
    const studentInfo = members.map(member => {
        return students.find(student =>JSON.stringify(student._id)===JSON.stringify(member))
    })
    return studentInfo;
}
export function getProfessorById(_Id,professor){
      const result =  professor.find(item =>JSON.stringify(item._id)===JSON.stringify(_Id))
      if(result){
        return result
      }else{
        return {
          name:'defaul Professor',
          _id:'defaul id'
        }
      }
}
export function devideStudentInClass(members,students){
    const inClass = members.map(member => {
      return students.find(student =>JSON.stringify(student._id)===JSON.stringify(member))
    })
    const NotInClass = students.filter(student => !members.includes(student._id))

    return {
      inClass,
      NotInClass
    };
}
export function filterClassInStudent(classes,listClass){
  const result= classes.map(item => {
      return listClass.find(_item =>JSON.stringify(_item._id)===JSON.stringify(item))
  })
  return result;
}
export function filterStudentByKeys(keys,students){
  const result= keys.map(item => {
     const  student = students.find(_item =>JSON.stringify(_item.key)===JSON.stringify(item))
     return student?student._id:null;
  })
  return result;
}
export function cutChartData(data){
  const result= data.filter(item=>{
    if(!isNaN(item.value)&&item.value!=0){
      return {
        ...item,value:Number(item.value)
      }
    }
  })
  return result;
}