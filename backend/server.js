import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import reservationRoutes from './routes/reservationRoutes.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import feedbackRoutes from './routes/feedbackRoutes.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import forgot from './routes/forgotPasswordRoute.js'





// app config
const app = express()
const port = process.env.PORT || 4000;
connectDb()
connectCloudinary()



//middlewares
app.use(express.json())
app.use(cors())


// api end point

app.use('/api', reservationRoutes);
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api', feedbackRoutes)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use('/api',forgot)







app.get('/',(req,res)=>{
    res.send('API WORKING')
})

app.listen(port, ()=>console.log("Server Started",port))