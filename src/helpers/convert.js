export function convertClass(listClass,listProfessor){
    return listClass.map(_class=>{
        const subject = _class.subject.length!==0?_class.subject[0].name:'chưa có môn';
        const professor = _class.professor.length!==0?getNameProfessorByID(_class.professor[0],listProfessor).name:'chưa có giáo viên';
        const total = _class.member.length;
        const startDate = new Date(_class.startDate).toLocaleDateString();
       return {
           ..._class,
           subject,
           professor,
           total,
           startDate
       }
    })
}
function getNameProfessorByID(id,list){
    const result =  list.find(item=>JSON.stringify(item._id) === JSON.stringify(id));
    console.log(id,list);
    if(result){
        return result;
    }
    return {name:'null'};
   
}
export function convertTopClass(data){
    
    
    const filter = data.filter(item=>item.name==='Mark');
    const result = filter.sort(function(a,b){
        return b.value -a.value;
    })
    return result.map((item,index)=>{
        return {...item, key:index+1}
    });
}