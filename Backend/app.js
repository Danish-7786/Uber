const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

const cookieParser = require("cookie-parser")
const cors =require('cors');
const app = express();
const connectToDb = require('./db/db');
connectToDb();
app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const userRoutes = require("./routes/user.routes.js");
const captainRoutes = require("./routes/captain.routes.js");
app.use("/users",userRoutes)
app.use("/captains",captainRoutes)
module.exports = app;