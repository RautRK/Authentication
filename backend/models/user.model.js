import mongoose from "mongoose";

// timestamps help to createat and updated fields be automatically added into the document 
const userSchema = new mongoose.Schema({
    email:{  type:String,
        required:true,
        unique:true
    },
    password:{
       type:String,
       required:true 
    },
    name:{
       type:String,
       required:true 
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,
  

},{timestamps:true});

export const User = mongoose.model('User',userSchema);
