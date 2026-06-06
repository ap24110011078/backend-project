import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${db_name} `)
        console.log(`DATABASE connected successfuly !! ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("Error: ", error)
        process.exit(1)
    }
}

export default connectDB 