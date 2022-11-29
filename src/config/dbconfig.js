const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
module.exports.MongoConnect = async function() {
    try {
        await mongoose.connect(process.env.MONGO_URL + '/' + process.env.DB_Name);
        console.log('Connection is done!')
    } catch (error){
        console.log('Error is', error)
    }
}