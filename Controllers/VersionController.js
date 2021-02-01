
exports.getAllVersion = (req, res, next) =>{
    res.status(200).json({
        message: 'got all versions'
    })
}