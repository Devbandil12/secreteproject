const express = require("express");
const path =require("path")

const app=express();



app.use(express.static(path.join(__dirname,'../Bookshop/dist')))






app.get("/",(req,res)=>{
    res.send("hello from ser")
    console.log("start");
    
})
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Bookshop/dist","index.html"))
})



app.listen(3000,()=>{
    console.log("listening");
    
})