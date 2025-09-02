import express, { type Request, type Response } from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT_NUMBER

app.use(cors({
    origin:["http://localhost:5173"],
    credentials: true,
}))

//Middleware
app.use(express.json())


app.get("/",(req: Request,res: Response)=>{
    res.send("Snapdeal Clone GET route")
})

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
})