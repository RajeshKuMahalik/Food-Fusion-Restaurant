import express from 'express';
import feedbackModel from '../models/feedback.js';
const app  =  express.Router()

const feedbackRoutes = app.post("/feedback", async (req,res) =>{

    try{
        const { name, email, message } = req.body
        const feedback = new feedbackModel({name,email,message});
        await feedback.save();
        res.status(201).json({success:true, message:"Feedback Submited"});
    } catch (error) {
           res.status(500).json({success:false, error:error.message})
    }
});

app.get("/feedbacks/all", async (req,res)=>{
    try {
        const feedbacks = await feedbackModel.find({});
        res.json({success:true,feedbacks});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

export default feedbackRoutes;