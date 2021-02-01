const User = require('../Models/UserModel');
exports.addUser = (req, res, next) => {
    User.findOne({user_name: req.body.user_name})
    .exec((err, user) => {
        if(user){ // check user_name exists or not ?
            return res.status(400).json({
                message: 'User name already exists',
                body: req.body
            })
        };    
    })
    // if user_name is not exists
    // get data from request
    const {user_name, password, phone, email, permission} = req.body;
    //cretate new user
    const _user = new User({user_name,password,phone,email,permission});
    _user.save()
    .then(user =>{
        return res.status(201).json({
            message: 'add user successfully',
            user: user,
        })
    })
    .catch(err => {
        return res.status(400).json({
            message: 'add user unsuccessfully',
            err: err
        })
    })
}
exports.Users = (req, res) =>{
    User.find({})
    .exec((err, users) =>{
        if(err) return res.status(400).json({err});
        if(users) return res.status(201).json({users});
    })
}