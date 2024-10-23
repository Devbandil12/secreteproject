const express = require("express");

//authorization and some additional 
const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser"  );
const cors = require("cors")

//From the database and models
const database = require("./databaseConnection.js/database.js");
const User = require("./models/user.js");
const job = require("./models/jobs.js");

//utils
const IsAuthenticated = require("./utils/IsAuthenticated.js");
const ApplyForJob = require("./models/Applied.js");






const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true, // Allow credentials (like cookies) if needed
}));
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "hii there",
  });
});

app.use(bodyparser.json());

app.post("/api/getstarted", async (req, res) => {
  
 try {
  const { name, email, password, skills } = req.body;
  const user = new User({ name, email, password, skills });
  await user.save();
  res.json({
    user: user,
  });
 } catch (error) {
  res.json({
    mesage:"somthing wnet wrong"
  })
 }
});


app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else {
      const token = jwt.sign({ name: user.name }, "@devbandil123");
      res.cookie("token", token);
     
      console.log(req.user);
      
      return res.send("successful login"); 
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Server error" }); 
  }
});


app.get("/MarketPlace",async (req, res) => {
  try {
    const jobs = await job.find();
    return res.send(jobs); 
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error fetching jobs"); 
  }
});


app.use(cookieParser())
app.use(IsAuthenticated)

app.get("/Profile",(req,res)=>{
  const user=req.user
  res.send(user)
})

app.post("/api/add/job",async(req,res)=>{
  try {
    const { title, description, experience, salary, lastDate } = req.body;
    const newJob = new job({ title, description, experience, salary, lastDate });

    if (newJob) {
      await newJob.save();
      return res.json({ message: "job added successfully" });
    }
  } catch (error) {
    
    return res.status(500).send("something needs to fix from your side  "); 
  }
})




app.post("/api/logout",(req,res)=>{
    
   try {
    res.cookie("token",null,{expires:new Date(Date.now())})

    return res.json({message:"logout sucess"})
   } catch (error) {
    return res.json({
      message:"something went wrong"
    })
   }
})

app.post("/api/apply/:jobId",async(req,res)=>{
  try {
        
    const Job_ID=req.params.jobId;
     const u_id=req.user._id
  
     const appliedJob = new ApplyForJob({jobID:Job_ID ,UID:u_id})
     
     
     if(appliedJob){
       await appliedJob.save()
   return  res.send( u_id +"applyeid "+Job_ID)
     }
     res.json({
      message:"gone wrong....."
     })
  
    
  } catch (error) {
    return res.json({
      message:"something went wrong"
    })
  }
})
database
  .then(() => {
    console.log("databse connecte....");
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log("listenign..........");
    });
  })
  .catch(() => {
    console.error("something happend with database/ check you connection");
  });
