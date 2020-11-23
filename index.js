// MODULES IMPORT
const express = require("express")
const app = express()
const {json, urlencoded} = require('express')
const PORT = process.env.PORT || 4000 
const productsRoutes = require("./routes/product")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose") 

//MIDDLEWARES
dotenv.config()
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, console.log("Connected"))
app.use(cors())
app.use(json())
app.use(urlencoded({extended:false}))
app.use("/api/v1/products", productsRoutes)



//APP ERROR ROUTE
app.use((req, res, next) => {
    const error = new Error (" Page Not found")
    error.status = 404;
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        "error message" : error.message
    })
})

//SERVER LISTENING
app.listen(PORT, console.log("Lets build bro!!"))