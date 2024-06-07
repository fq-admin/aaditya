import express from 'express'
import cors from 'cors'
import router from './routes/user.js'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'

const app = express()
app.use(fileUpload())
app.use(express.json())
mongoose.connect("mongodb+srv://aditya:adirox123@cluster0.v7fbpph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// const _dirname=path.dirname("")

// const{createPool}=require('mysql')

// const pool=createPool({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"test",
//     connectionLimit:10
// })

// const buildpath=path.join(_dirname,"../client/dist")
// app.use(express.static(buildpath))
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        credentials: true
    }
))
app.use('/upload', router)



app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`)
})