const express=require('express');
const app=express();
const dotenv=require('dotenv');
const connectDB = require('./config/connectDB');
const cors=require('cors');

// routehandlers
const userRegister=require('./routes/register');
const userLogin=require('./routes/login');
const expenseRouter=require('./routes/expense')

// env config
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

// database connection
connectDB();

// api's
app.use('/signup',userRegister);
app.use('/login',userLogin);
app.use('/expense',expenseRouter);

// server
const PORT= process.env.PORT ||8000;
app.listen(PORT,()=>{console.log(`Listening on port ${PORT}.....`)});