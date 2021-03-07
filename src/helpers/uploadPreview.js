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