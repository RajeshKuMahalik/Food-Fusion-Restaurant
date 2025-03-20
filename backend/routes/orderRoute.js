import express from 'express'
import { placeOrder,placeOrderRazorpay,allOrders, userOrder,updateStatus, verifyRazorpay } from '../controllers/orderController.js'
import adminAuth from '../middlewares/adminAuth.js';
import authMiddleware from '../middlewares/authMIddleware.js';

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features
orderRouter.post('/place',authMiddleware,placeOrder)
orderRouter.post('/razorpay',authMiddleware,placeOrderRazorpay)


// USer Feature
orderRouter.post('/userorder',authMiddleware,userOrder)

//verify payment
orderRouter.post('/verifyRazorpay',authMiddleware, verifyRazorpay)


export default orderRouter;