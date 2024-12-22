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
router.get("/", async (req, res) => {
  try {
    const dictionaryData = await readJsonFile("./assets/dictionary.json");
    res.status(200).json(dictionaryData);
  } catch (error) {
    console.error("Error fetching dictionary data:", error.message);
    res.status(500).json({ error: "Failed to load dictionary data" });
  }
});

module.exports = router;
