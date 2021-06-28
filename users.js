const mongo = require('mongoose');
let userSchema = new mongo.Schema({
    _id: mongo.Schema.Types.ObjectId,
    name: String,
    email: String,
    id: Number
})
module.exports = mongo.model('users',userSchema)
    