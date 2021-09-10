import jwt from 'jsonwebtoken';
import { colorRandom } from '../anothers/constants';
import {LAYOUTCONSTANTS} from '../redux/config/constant';
class HelperClass {
    numFormatter(num) {
        if(num > 999 && num < 1000000){
            return Math.floor((num/1000)) + 'K'; 
        }else if(num > 1000000){
            return (num/1000000).toFixed(1) + 'M'; 
        }else if(num < 999){
            return num;
        }
    }
    VerifyToken = (token) => {
        const result = jwt.verify(token, 'key_secret', function (err, decoded) {
            if (err) {
                return null;
            } else {
                return token;
            }
        })
        console.log('veryfy token',result);
        return result;
    }
    CountPercent(data,Other=true){
        var total = 0;
        data.forEach( (element) => {
            total +=element.value
        });
        data = data.map((item) =>{
           return {
            key:item.key,
            value:Math.round((item.value/total)*100)
           }
        })
        data.sort((a,b)=> b.value - a.value)
        if(Other){
            const other = data.splice(2);
            var valueOther = 0;
            other.forEach(item =>{
                valueOther += item.value;
            })
            data.push({
                key:'Other',
                value: valueOther
            })
        }
        return data
    }
    randomColorNotDuplicate(length){
        const keys = Object.keys(colorRandom.names);
        const values = Object.values(colorRandom.names);
        var arrayColor = keys.map((item,index)=> values[index]);
        var result = [];
        for(var i =0;i<length;i++){
            result.push(...arrayColor.splice(Math.floor(Math.random()*arrayColor.length),1));
        }
        return result
    }
    addFieldColorRandom = (data)=>{
        const arrayRandomColor = this.randomColorNotDuplicate(data.length);
        return data.map((item,index) =>{
            return {
               ...item,
               color:arrayRandomColor[index]
            }
        })
    }
    SetLoading(loading,dispatch){
        console.log(loading);
        dispatch({type:LAYOUTCONSTANTS.LOADING,payload:loading});
    }
    getDateNowString(time) {
        let date = time?new Date(time):new Date();
        let month =
            date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1,
          day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        let dateNow = date.getFullYear() + "-" + month + "-" + day;
        return dateNow;
      }
}
export default new HelperClass();