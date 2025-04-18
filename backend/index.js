import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors({origin:"http://localhost:5173",credentials:true}));

// allows us to parse incoming requests with JSON payloads(middleware)
app.use(express.json());
//allows to parse incoming cookies
app.use(cookieParser());

app.use("/api/auth",authRoutes);

app.listen(5000,()=>{
    connectDB();
   console.log("server is running on port",PORT); 
});

