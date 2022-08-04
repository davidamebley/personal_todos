const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// Database
// Common commands: \l= list all db in postgresql; \c= move inside a db; \dt= show table in db


//start server
app.listen(5000, () => {
    console.log("server has started on port 5000");
});