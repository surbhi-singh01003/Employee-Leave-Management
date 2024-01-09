const mongoose = require('mongoose')
require('dotenv').config({ path: "./dev.env" });
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/employee")
// .then((Database) => console.log("Database connected!",Database))
console.log(process.env.MONGODB_URL)