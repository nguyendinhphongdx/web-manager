class GlobalContext {
    constructor(){
        this.state = {
            studentSelected : null,
            classSelected : null
        };
    }
    getState(){
        return this.state;
    }
    initState(){
        this.state={
            studentSelected : null,
            classSelected : null
        }
    }
    setStudentSelected(student){
        const state = this.state;
        this.state={
            ...state,
            studentSelected:student
        }
    }
    setClassSelected(_class){
        const state = this.state;
        this.state={
            ...state,
            classSelected:_class
        }
    }
}
export default new GlobalContext();