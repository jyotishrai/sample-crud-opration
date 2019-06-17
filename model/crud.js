
//require mongoose
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
let crudSchema= new Schema({
   
    name: {type: String,required: true },
    phone : {type:String, required:true},
    email:{type:String, required: true}

},
{versionKey:false});
// Export the model
module.exports = mongoose.model('crud', crudSchema);