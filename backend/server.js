
const path = require("path");
const express = require("express");
const user = require("../backend/models/model.js");
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
    const newUser = new user({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
});




const PORT = 5000;
const server = app.listen(PORT, () => {
  console.log("listenign..........");
});