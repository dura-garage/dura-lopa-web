const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const fs = require("fs").promises;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected.");
    // Start Server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.get("/", async (req, res) => res.send("Backend is running!"));

// Dictionary Routes
app.get("/api/dictionary", async (req, res) => {
  try{
    // read data form json file
    const data = await fs.readFile("./assets/dictionary.json");
    
    // parse the json data  
    const dictionaryData = JSON.parse(data)

    res.status(200).json(dictionaryData);
  }
  catch(error){
    console.error("Error reading dictionary.json", error.message)
    res.status(500).json({error:"Failed to load dictionary data"});
  }
});
