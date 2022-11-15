import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const db_connection = async (username,password)=>{

    const DB_URL = `mongodb://${username}:${password}@ac-j6jeorx-shard-00-00.wexyfxp.mongodb.net:27017,ac-j6jeorx-shard-00-01.wexyfxp.mongodb.net:27017,ac-j6jeorx-shard-00-02.wexyfxp.mongodb.net:27017/?ssl=true&replicaSet=atlas-111qki-shard-0&authSource=admin&retryWrites=true&w=majority`
    
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log("Database connected")
    }
    catch(error){
        console.log("Unable to connect Database: ",error.message)
    }
}

export default db_connection;