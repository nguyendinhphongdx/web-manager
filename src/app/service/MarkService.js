class MarkService{
    avgMark(mark){
        var test= mark.test?mark.test.mark:1;
        var midle= mark.midle?mark.midle.mark:1;
        var final= mark.final?mark.final.mark:1;
        return (test+midle+final)/3
    }
}
module.exports = new MarkService();