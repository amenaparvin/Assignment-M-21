import {SingleProfileReadService,
    AllProfileReadService,
    SingleProfileUpdateService,SingleProfileDeleteService} from "../service/ProfileServices.js";



export const SingleProfileRead=async (req,res)=>{
    let result=await  SingleProfileReadService(req);
    return res.status(200).json(result)
}

export const AllProfileRead=async (req,res)=>{
    let result=await  AllProfileReadService(req);
    return res.status(200).json(result)
}

export const SingleProfileUpdate=async (req,res)=>{
    let result=await  SingleProfileUpdateService(req);
    return res.status(200).json(result)
}

export const SingleProfileDelete=async (req,res)=>{
    let result=await  SingleProfileDeleteService(req);
    return res.status(200).json(result)
}


