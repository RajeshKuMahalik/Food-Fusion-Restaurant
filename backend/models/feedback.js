import mongoose from "mongoose"

const feedbackSchema = new mongoose.Schema({
    name:{type:String, requried:true},
    email:{type:String, requried:true},
    message:{type:String, required:true}
})

const feedbackModel = mongoose.models.feedback || mongoose.model("Feedback", feedbackSchema);

export default feedbackModel;