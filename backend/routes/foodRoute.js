import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodControllers.js'
import multer from 'multer'
import adminAuth from '../middlewares/adminAuth.js';

const foodRouter = express.Router();


// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,callBack)=>{
        return callBack(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


foodRouter.post("/add",adminAuth ,upload.single("image"),addFood)
foodRouter.get('/list',listFood)
foodRouter.post('/remove',adminAuth,removeFood);





export default foodRouter;