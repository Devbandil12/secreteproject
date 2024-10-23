const mongoose=require("mongoose")



const ApplySchema=mongoose.Schema({
    jobID:{
        type:String,
        required:true

    },
    UID:{
        type:String,
        required:true
    },

    
})

const ApplyForJob=mongoose.model("ApplyForJob",ApplySchema);
module.exports=ApplyForJob;