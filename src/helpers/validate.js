export function validateClass(data){
    var result = {...data}
    if(!data.name){
        delete result.name
    }
    if(!data._idSubject){
        delete result._idSubject
    }
    if(!data._idProfessor){
        delete result._idProfessor
    }
    if(!data.schedule1){
        delete result.schedule1
    }
    if(!data.schedule2){
        delete result.schedule2
    }
    return result;

}