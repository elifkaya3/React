const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employees");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:elifk123@cluster0.ftcks.mongodb.net/fullstack?retryWrites=true&w=majority");

//listele
app.get("/getEmployees", (req, res) => {
    EmployeeModel.find({}, (err, result) => {
        if (err){
            res.json(err);
        }else{
            res.json(result);
        }

    })
})

//yeni kayıt
app.post("/createEmployee", async(req,res)=>{
    const employee = req.body;
    const newEmployee = new EmployeeModel(employee);
    await newEmployee.save();

    res.json(employee);
})

//güncelle
app.put("/updateEmployee", async(req,res)=>{
    const newName=req.body.newName;
    const newAge=req.body.newAge;
    const id=req.body.id;

    try{
        await EmployeeModel.findById(id, (error,updatedEmployee)=>{
            updatedEmployee.name=newName;
            updatedEmployee.age=newAge;
            updatedEmployee.save();
        });
    } catch(error){
        console.log(error);
    }
    res.json("updated");
});

//Sil
app.delete("/deleteEmployee/:id", async(req,res) =>{
    const id=req.params.id;
    
    await EmployeeModel.findByIdAndRemove(id).exec();
    res.send("deleted");
})


app.listen(3000, () => {
    console.log("SERVER ÇALIŞIYOR");
}) 

