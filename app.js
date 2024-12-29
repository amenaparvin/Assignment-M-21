import express from "express";
import cors from 'cors';
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import  {DATABASE, PORT, REQUEST_NUMBER, REQUEST_TIME, URL_ENCODE, WEB_CACHE, MAX_JSON_SIZE, } from "./app/config/config.js";
import router from "./routes/api.js";



const app = express();

//App Use Default Middleware
app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({extended:URL_ENCODE}));
app.use(hpp())
app.use(helmet());
app.use(cookieParser())

//App Use  limiter
const limiter = rateLimit({windowMs:REQUEST_TIME,max:REQUEST_NUMBER})
app.use(limiter)

//Cache
app.set('etag',WEB_CACHE)

//Database connect
mongoose.connect(DATABASE,{autoIndex:true}).then(()=>{
    console.log("MongoDB Connected");
}).catch(()=>{
    console.log("MongoDB disconnected");
})

app.use("/api",router)


app.listen(PORT,()=>{
    console.log("Server started on port"+PORT)
})
