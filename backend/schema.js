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
mobilenumber: {
type: Number,
required: true
},
newpassword: {
type: String,
required: true
},
day:{
    type: Number,
required: true
},
month:{
    type: String,
required: true
},
year:{
    type: Number,
    required: true
}
})

module.exports = mongoose.model('User', projectSchema)