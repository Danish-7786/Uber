const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const cors =require('cors');
const app = express();

app.use(cors());

app.get('/',(req,res)=> {
    res.send('Hello world');
})

module.exports = app;