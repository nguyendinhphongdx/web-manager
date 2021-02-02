const path = require('path');
const Version = require('../Models/VersionModel');
exports.getAllVersion = (req, res, next) =>{
    res.status(200).json({
        message: 'got all versions'
    })
}
exports.upload = (req, res) =>{
    let FileVersion;
    let uploadPath;
 
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    Version.findOne({version_name: req.body.version_name})
    .exec((err, version) => {
        if(version){ // check user_name exists or not ?
            return res.status(400).json({
                message: 'version already exists',
                name: req.body.version_name
            })
        }
        if(!version){
            FileVersion = req.files.file; // name of file
            uploadPath = path.join('public/uploads/') + FileVersion.name;
            // Use the mv() method to place the file somewhere on your server
            FileVersion.mv(uploadPath, function(err) {
                if (err)
                return res.status(500).send(err);
                const {version_name, description} =req.body; // get name and des
                const type_file = path.extname(FileVersion.name);
                const total_size = FileVersion.size;
                const _version = new Version({version_name, type_file, total_size, description});
                _version.save()
                .catch(err => res.status(500).send(err))
                .then(version => res.status(201).json({
                    message: 'File uploaded',
                    version,
                }))
            });
        }    
    })
    
}