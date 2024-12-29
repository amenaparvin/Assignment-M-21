

import {UserLoginService, UserOTPService, UserRegistrationService, VerifyOTPService} from "../service/UserServices.js";

export const UserRegistration=async (req, res)=>{
    let result=await  UserRegistrationService(req);
    return res.status(200).json(result)
}

export const UserLogin=async (req,res)=>{
    let result=await  UserLoginService(req);
    return res.status(200).json(result)
}

export const UserOTP=async (req,res)=>{
    let result=await  UserOTPService(req);
    return res.status(200).json(result)
}

export const VerifyOTP=async (req,res)=>{
    let result=await  VerifyOTPService(req);
    return res.status(200).json(result)
}
