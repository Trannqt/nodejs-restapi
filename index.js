const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

//CONNECT DATABASE: B4ScE7aw6vli0j8Z
mongoose.connect((process.env.MONGODB_URL),()=>{
    console.log("connected to mongodb");
})

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));



app.listen(8001,()=>{
    console.log("Server is running...");
});