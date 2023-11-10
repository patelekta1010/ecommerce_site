import express from "express"
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
//res object
const app = express();

//configure env
dotenv.config();

//database config
connectDB();


//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes)

//rest api
app.get('/',(req,res)=>{
    res.send({
        message:"welcome"
    })
})

//PORT
const PORT =process.env.PORT|| 8080;

//RUN LISTEN
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
})