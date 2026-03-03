const express = require("express");
const router = express.Router();
const { registerSuperAdmin, login } = require("../controllers/authController");

// Register Super Admin
router.post("/register", registerSuperAdmin);

// Login (All users)
router.post("/login", login);

module.exports = router;