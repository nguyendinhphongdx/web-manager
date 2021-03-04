const RouteLogin = require("./Authen");
const RouteUser = require("./User");
const RouteStudent = require("./Student");
const RouteSubject = require("./Subject");
const RouteProfessor = require("./Professor");
function Route(app){
    app.use('/login',RouteLogin);
    app.use('/user',RouteUser);
    app.use('/student',RouteStudent);
    app.use('/subject',RouteSubject);
    app.use('/professor',RouteProfessor);
    app.use('/',(req, res, next) =>{
        res.json({
            message:'Welcome to WebManager!'
        })
    });
}
module.exports = Route;