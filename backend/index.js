require("dotenv").config();
const express = require("express");
require('./db/Connection');
const cors=require('cors');
// const userRouter=require('./Routes/userRoutes')

// express app
const app = express();
const port = process.env.PORT || 5000 ;


// middleware
app.use(express.json());
app.use(cors());

//Required routes
const userRouter = require('./Routes/userRoutes')


// routes
app.use('/api/user',userRouter)



app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
