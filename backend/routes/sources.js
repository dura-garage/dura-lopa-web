const express = require("express");
const fs = require("fs").promises;
const router = express.Router();

let sourcesCache = null;

// Utility to read JSON files
const preloadJsonFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Error reading file ${filePath}: ${error.message}`);
  }
};

// Preload sources on server startup
(async () => {
  try {
    sourcesCache = await preloadJsonFile("./assets/sources.json");
    console.log("Sources data preloaded into memory.");
  } catch (error) {
    console.error("Failed to preload sources data:", error.message);
  }
})();

// Routes
router.get("/", async (req, res) => {
  try {
    if (!sourcesCache) {
      throw new Error("Sources data is not loaded.");
    }
    res.status(200).json(sourcesCache);
  } catch (error) {
    console.error("Error fetching sources data:", error.message);
    res.status(500).json({ error: "Failed to load sources data" });
  }
});

module.exports = router;
