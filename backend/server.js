
const path = require("path");
const express = require("express");
const User = require("../backend/models/model.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt =require("jsonwebtoken")
const product=require("../backend/models/products.js")

const cookeiparser=require("cookie-parser")

const database=require("../backend/databaseConnection.js/database.js")

const app = express();



app.use(
  cors({
    origin: "http://localhost:5173",
  })
)


// Serve static files (optional if you have a frontend)
app.use(express.static(path.join(__dirname, "../Bookshop/dist")));



app.use(express.json())
app.use(bodyParser.json());

app.post("/api/getstarted", async (req, res) => {
  const {id, name, email, password,isShopkeeper,shopid } = req.body;
  console.log(id, name, email, password,isShopkeeper,shopid );
  

  try {
    const newUser = new User({ id,name, email, password ,isShopkeeper,shopid});
    await newUser.save();
    res.status(201).json(newUser);

    
  } catch (error) {
    console.log(error);
  }
});


app.use(cookeiparser())

app.post('/api/login', async (req, res) => {


  
  const {name, email, password } = req.body;


  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password directly (not recommended)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    else{
      const token =  jwt.sign({name:user.name},"@devbandil123",{expiresIn:"5sec"})
     
      
      res.cookie("token",token)
     
    
      res.send("successful login")
    }
       
    
  } catch (error) {
    console.error('Error during login:', error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
 

  
});
async function isauthenticated(req,res,next){
  try {
    const cookies=req.cookies
  const {token}=cookies



  if(!token){
   return res.send("please login")
  }
  next()
    
  } catch (error) {
  
    
    
  }
  

}
app.get("*",isauthenticated,(req, res) => {
  res.sendFile(path.join(__dirname, "../Bookshop/dist", "index.html"));
});


const http = require('http');
const socketIo = require('socket.io');
const { log } = require("console");



const tp = http.createServer(app);
const io = socketIo(tp);
 
io.on('connection', (socket) => {
  console.log('A user connected' + socket.id);
socket.on("profiledata",async(namee,profileimage,bgimage)=>{
  const Product=new product(namee,profileimage,bgimage)
             await Product.save()
  
})

});



  



database.then(()=>{
  
  console.log("databse connecte....");
  const PORT = 5000;
 tp.listen(PORT, () => {
  console.log("listenign..........");
});

  
}).catch(()=>{
  console.error("something happend with database/ check you connection");
  
})



