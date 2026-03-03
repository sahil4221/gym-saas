const {Pool} = require("pg");
require("dotenv").config();

const pool= new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})


//for connection testin purpose

pool.connect((err , client, release)=>{
    if(err){
        console.error("Error connecting to database:", err);
    } else {
        console.log("Connected to database successfully");
    }
    release();
})
module.exports = { pool };