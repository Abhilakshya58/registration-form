const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/studentRegistration",{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log(`connection done`);
}).catch((e)=>{
    console.log(`no connection`);
})