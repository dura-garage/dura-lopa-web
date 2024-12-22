const express = require("express");
const fs = require("fs").promises;
const router = express.Router();

let dictionaryCache = null;

// Utility to read JSON files
const preloadJsonFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Error reading file ${filePath}: ${error.message}`);
  }
};

// Preloading sentences on server startup
async () => {
  try {
    dictionaryCache = await preloadJsonFile("./assets/sentences.json");
    console.log("Sentence data preloaded into memory.");
  } catch (error) {
    console.error("Failed to preload sentence data:", error.message);
  }
};

// Routes
router.get("/all", async (req, res) => {
  try {
    if (!dictionaryCache) {
      throw new Error("Sentence data is not loaded.");
    }
    res.status(200).json(sentences);
  } catch (error) {
    console.error("Error fetching sentences data:", error.message);
    res.status(500).json({ error: "Failed to load sentences data" });
  }
});

module.exports = router;
