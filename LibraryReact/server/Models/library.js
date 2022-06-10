const mongoose=require('mongoose');

const librarySchema=new mongoose.Schema({
    Isbn:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    publishdate:{
        type:String,
        required:true
    },
    pagenumbers:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:false
    }    
})

const LibraryModel=mongoose.model("library",librarySchema);
module.exports=LibraryModel;