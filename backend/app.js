const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Logging
const logStream = fs.createWriteStream(path.join(__dirname, "logs/app.log"), {
  flags: "a",
});
app.use(morgan("combined", { stream: logStream }));

// Static Files
// app.use("/assets", express.static(path.join(__dirname, "assets")));

// Modular Routes
const dictionaryRoutes = require("./routes/dictionary");
const sentencesRoutes = require("./routes/sentences");
const sourcesRoutes = require("./routes/sources");

app.use("/api/dictionary", dictionaryRoutes);
app.use("/api/sentences", sentencesRoutes);
app.use("/api/sources", sourcesRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

// MongoDB Connection
// if (process.env.MONGO_URI) {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("MongoDB connected."))
//     .catch((err) => console.error("MongoDB connection error:", err));
// } else {
//   console.warn(
//     "Warning: MONGO_URI is not defined. MongoDB connection skipped."
//   );
// }

module.exports = app;
