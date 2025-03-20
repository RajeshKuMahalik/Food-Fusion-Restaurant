import express from 'express'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { decode } from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import bcrypt, { hash } from 'bcryptjs'

const route = express.Router();

const forgot = route.post('/forgot-password', (req,res)=>{
    const {email} = req.body;
    userModel.findOne({email: email})
    .then(user => {
        if(!user) {
               return res.send({Status: "User not existed"})
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"} )
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rajeshkumarmahalik41@gmail.com',
              pass: 'rofc xokw fipq juvq'
            }
          });
          
          var mailOptions = {
            from: 'youremail@gmail.com',
            to: 'myfriend@yahoo.com',
            subject: 'Reset Your Password',
            text: `http://localhost:5173/reset-password/${user._id}/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              return res.send({Status : "Success"});
            }
          });
    }) 
})

route.post('/reset_password/:id/:token',(req,res) =>{
     const {id,token} = req.params
    const {password} = req.body
   
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) =>{
        if(err) {
            return res.json({Statuc: "Error with Token"})
        } else {
            bcrypt.hash(password, 10)
            .then(hash =>{
                userModel.findByIdAndUpdate({_id:id}, {password: hash})
                .then(u => res.send({Status: "success"}))
                .catch(err => res.send({Status: err}))
            })
        }
    })
  } catch(err) {
    res.send({success:true,message:err})
  }
   
   
} )

export default forgot;

