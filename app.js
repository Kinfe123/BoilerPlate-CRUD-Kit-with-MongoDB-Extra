import express from 'express'
import mongoose  from 'mongoose'
import kinfishRouter from "./routers/kinfish.js"
import bodyParser from "body-parser"
const app = express()
const url = "mongodb://localhost/Kinfish"
const PORT = 5000

mongoose.connect(url )
const connections = mongoose.connection
// we are listening for the event to be connected
connections.on('open' , ()=>{
    console.log("Connected to the database")
})
app.use(express.json())

app.use('/kinfish' , kinfishRouter )

app.get('/' , (req , res)=>{
    res.send("This is the response from home")
})
app.listen(PORT , ()=> {
    console.log('The server has started')
})