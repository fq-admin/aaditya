import express from 'express'
import cors from 'cors'
import router from './routes/user.js'
import fileUpload from 'express-fileupload'

const app = express()
app.use(fileUpload())
app.use(express.json())
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
    }
))
app.use('/upload', router)



app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`)
})