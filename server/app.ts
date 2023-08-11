import express, { Express, Request, Response, json } from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth"
import { verifyToken } from "./middleware/verifyToken";
dotenv.config();

const app: Express = express();
app.use(json())
app.use('/api/auth',authRouter)

app.get('/',(req:Request,res:Response)=>{
    res.status(200).send("Server Running")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));
