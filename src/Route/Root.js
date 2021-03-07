const RouteLogin = require("./Authen");
const RouteUser = require("./User");
const RouteStudent = require("./Student");
const RouteSubject = require("./Subject");
const RouteProfessor = require("./Professor");
const RouteClass = require("./Class");
const RouteDocument = require("./Document");

function Route(app){
    app.use('/login',RouteLogin);
    app.use('/user',RouteUser);
    app.use('/student',RouteStudent);
    app.use('/subject',RouteSubject);
    app.use('/professor',RouteProfessor);
    app.use('/class',RouteClass);
    app.use('/document',RouteDocument);
    app.use('/',(req, res) =>{
        res.json({
            message:'Welcome to WebManager!'
        })
    });
}
module.exports = Route;