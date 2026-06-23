import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB ()

.then(() => {
    
    app.on("error", (error) => {
        console.log(`error : ${error}`);
        throw error;
    })

    app.listen(process.env.PORT || 8000 , ()=> {
      console.log(`app is listening on port , ${process.emv.PORT}`)
    })
})

.catch((err) => {
    console.log(`mongo db connection failed `, err);
})














/*
const app = express()

( async () => {
    try {
         await mongoose.connect(`${process.env.Vtube}/${db_name} `)
         app.on("error", () => {
            console.log("error: ", error)
            throw error
         })

         app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`)
         })

    } catch (error) {
        console.error("Error: ", error)
        throw error
    }

})()
    */