const mongoose = require('mongoose')

const useSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String
})
const useModel = mongoose.model('customers',useSchema)
module.exports = useModel