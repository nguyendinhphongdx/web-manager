const RouteVersion = require("./Version");
const RouteDevice = require("./Devices");
const RouteReport = require("./Reports");
const RouteLogging = require("./Loggings");
const RouteObject = require("./Objects");
const RouteLogin = require("./Login");


function Route(app){

    app.use('/login',RouteLogin);
    app.use('/versions',RouteVersion);
    app.use('/devices',RouteDevice);
    app.use('/reports', RouteReport);
    app.use('/loggings',RouteLogging);
    app.use('/objects',RouteObject);
    app.use('/',(req, res, next) =>{
        res.json({
            message:'/ not declare'
        })
    });

}
module.exports = Route;