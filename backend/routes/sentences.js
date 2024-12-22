const express = require("express");
const fs = require("fs").promises;
const router = express.Router();

// Utility to read JSON files
const readJsonFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Error reading file ${filePath}: ${error.message}`);
  }
};

// Routes
router.get("/all", async (req, res) => {
  try {
    const sentences = await readJsonFile("./assets/sentences.json");
    res.status(200).json(sentences);
  } catch (error) {
    console.error("Error fetching sentences data:", error.message);
    res.status(500).json({ error: "Failed to load sentences data" });
  }
});

module.exports = router;
