const express=require('express');
const app=express();
const path=require("path");
const hbs=require("hbs");
require('./db/conn.js');

const Register=require("./models/registers.js")
const port=process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));

app.set("view engine","hbs");
app.set("views",template_path);

hbs.registerPartials(partials_path);

app.get('/',(req,res)=>{
    res.render("index");
});
app.get('/register',(req,res)=>{
    res.render("register");
});

app.post('/register', async (req,res)=>{
    try {
        const registerStudent=new Register({
            name:req.body.name,
            fatherName:req.body.fatherName,
            motherName:req.body.motherName,
            gender:req.body.gender,
            class:req.body.class,
            mobileNumber:req.body.mobileNumber,
            aadharNumber:req.body.aadharNumber
        })

        const registered= await registerStudent.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port,()=>{
    console.log(`server is connected at ${port}`);
})