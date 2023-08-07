import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();

app.get('/',(req:Request,res:Response)=>{
    res.status(200).send("Server Running")
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));
