import express, { json } from 'express'
import dotenv from 'dotenv'
import db_connection from './db.js'
import Routes from './routes/userRoutes.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/',Routes)
app.use(cors())

dotenv.config();

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
db_connection(username,password);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})

