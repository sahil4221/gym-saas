require("dotenv").config();
const pool = require("./config/db").pool;

const app = require("./app");

const PORT = process.env.PORT || 8080;
app.listen(PORT ,() => {
    console.log(`server is running on port ${PORT}`);
})