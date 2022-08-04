// This file connects to our db
const Pool = require("pg").Pool;

// Configuration
const pool = new Pool({
    user: "postgres",
    password: "Password1",
    host: "localhost",
    port: 5432,
    database: "tododb"
});

module.exports = pool;