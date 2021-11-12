/**
 * This below code is for the schema
 */

const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
firstname: {
type: String,
required: true
},
surname:{
    type: String,
    required: true  
},
email: {
type: String,
required: true
},
newpassword: {
type: String,
required: true
},

})

module.exports = mongoose.model('User', projectSchema)