import express from "express";
import cookieParser  from "cookie-parser";

const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser)



export default app;