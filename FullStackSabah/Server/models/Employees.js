const mongoose = require("mongoose"); 
const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String,       
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    img:{
        type:String,
        required:false
    }
})

const EmployeeModel = mongoose.model("employees",EmployeeSchema);

module.exports = EmployeeModel