
const path = require("path");
const express = require("express");
const User = require("../backend/models/model.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongosdb = require("./databaseConnection.js/database.js");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);



// Serve static files (optional if you have a frontend)
app.use(express.static(path.join(__dirname, "../Bookshop/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Bookshop/dist", "index.html"));
});


app.use(bodyParser.json());

app.post("/api/getstarted", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
});

app.post('/api/login', async (req, res) => {


  
  const { email, password } = req.body;
 console.log(email, password);

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

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
 

  
});

  







const PORT = 5000;
const server = app.listen(PORT, () => {
  console.log("listenign..........");
});