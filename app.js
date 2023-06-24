import express from "express"
const app = express()
const port = process.env.port || "3000"
const DATABASE_URL = "mongodb://localhost:27017";
import connectDB from "./db/connectdb.js";
import { join } from "path";
import web from "./routes/web.js"


// Database connection
connectDB(DATABASE_URL)

// const bodyParser = require("body-parser")
// import bodyParser from "body-parser"
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({extended: false}))

// Static files
app.use("/recipe", express.static(join(process.cwd(), "public"))) 
app.use("/recipe/edit", express.static(join(process.cwd(), "public"))) 

// set Template Engine 
app.set("view engine", "ejs")

// Load Routes
app.use("/recipe", web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})