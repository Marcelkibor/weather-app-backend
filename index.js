const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv  = require("dotenv");
const r_auth = require("./routes/authentication");
const r_location = require("./routes/locations");
//connect too DB
dotenv.config();
mongoose.connect(process.env.DB_CONNECT,).then(
    console.log("DB Connected!")
).catch(e=>console.log(e));
//Middlewares
app.use(express.json());
//routes
app.use("/auth",r_auth);
app.use("/location",r_location);
app.listen(5000,()=>{console.log("Server started on port 5000")})