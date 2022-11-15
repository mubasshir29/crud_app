import express, { json } from 'express'
import dotenv from 'dotenv'
import db_connection from './db.js'
import Routes from './routes/userRoutes.js'

const app = express()
app.use(express.json())
app.use('/',Routes)

dotenv.config();

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
db_connection(username,password);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})

