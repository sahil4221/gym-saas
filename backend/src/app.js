const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// Security middleware
app.use(helmet());

// Logging middleware
app.use(morgan("dev"));

// Body parser
app.use(express.json());

// CORS
app.use(cors());

//base route
app.get("/", (req, res) => {
  res.json({ msg: "server running" });
});

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is working" });
});

module.exports = app;