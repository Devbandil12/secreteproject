const mongoose=require("mongoose")

const userschema=  mongoose.Schema({
    name:{
        type:String,
        require:true,
        

    },
    email:{
type:String,
require:true,
unique:true
    },
    password:{
        type:String,
       
    },
    skills:{
        type:[]
    }
})

const User=mongoose.model("user",userschema)

module.exports=User;