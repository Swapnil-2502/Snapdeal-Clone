import express, { type Request, type Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import { ConnectDB } from "./config/db"
import authRoutes from "./routes/authRoute"
import productRoutes from "./routes/productRoute"
import addressRoutes from "./routes/addressRoute"

dotenv.config()

const app = express()
const PORT = process.env.PORT_NUMBER

app.use(cors({
    origin:["http://localhost:5173"],
    credentials: true,
}))

//Middleware
app.use(express.json())

app.use('/api/auth',authRoutes)
app.use('/api/product',productRoutes)
app.use('/api/user/addresses',addressRoutes)


app.get("/",(req: Request,res: Response)=>{
    res.send("Snapdeal Clone GET route")
})

ConnectDB().then(() => {
    app.listen(PORT,()=>{
        console.log(`Server started at PORT ${PORT}`)
    })
})