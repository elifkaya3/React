const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const LibraryModel = require("./models/library");

app.listen(3000,()=>{
    console.log("Server Çalışıyor");
})

app.use(express.json);
app.use(cors());

app.get("/getbooks",(req,res)=>{
    LibraryModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})


mongoose.connect("mongodb+srv://react:753753@cluster0.hww8j.mongodb.net/Library?retryWrites=true&w=majority");