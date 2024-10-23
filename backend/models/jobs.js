const mongoose=require("mongoose")


const jobschema=mongoose.Schema({

    title:{
        type:String,
        required:true,
        maxLength:40,
    },
    description:{
        type:String,
        required:true,
        minLength:50,
        maxLength:200
        
    },
    experience:{
      type:String,
      required:true,
     
    },
    salary:{
        type:String,
        required:true
    },
    lastDate:{
        type:String,
        required:true
    },


})
const job=mongoose.model("job",jobschema);
module.exports=job;