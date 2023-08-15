const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true,
        unique:true
    },
    aadharNumber:{
        type:Number,
        required:true,
        unique:true
    }
});

const Register=new mongoose.model("Register",studentSchema);
module.exports=Register;