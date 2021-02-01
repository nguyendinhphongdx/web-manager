const e = require('cors');
const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.k5b1z.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connect database successfull !!')
    } catch (error) {
        console.log('Connect database failure !!',error)
    }
}
module.exports = {connect};
