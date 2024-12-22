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

// Preload dictionary on server startup
(async () => {
  try {
    dictionaryCache = await preloadJsonFile("./assets/dictionary.json");
    console.log("Dictionary data preloaded into memory.");
  } catch (error) {
    console.error("Failed to preload dictionary data:", error.message);
  }
})();

// Routes
router.get("/", async (req, res) => {
  try {
    if (!dictionaryCache) {
      throw new Error("Dictionary data is not loaded.");
    }
    res.status(200).json(dictionaryCache);
  } catch (error) {
    console.error("Error fetching dictionary data:", error.message);
    res.status(500).json({ error: "Failed to load dictionary data" });
  }
});

module.exports = router;
