import UsersModel from "../models/UsersModel.js";
import e from "express";
// import EmailSend from "../utility/EmailHelper.js";
import UserM0del from "../models/UsersModel.js"
import ProfileModel from "../models/ProfileModel.js";


export const UserRegistrationService=async (req)=>{
    try {
        let reqBody = req.body;
        let data = await UsersModel.create(reqBody);
        return { status: "success", data: data };
    } catch (e) {
        return { status: "error", message: e.toString() };
    }
}
export const UserLoginService=async (req) => {
    console.log(req.body);

    try {
        let reqBody = req.body;
        let data = await UsersModel.aggregate([
            {
                $match: reqBody,
            },
            {
                $project: {
                    _id: 1,
                    email: 1,
                },
            },
        ]);
        return { status: "success", data: data };
    } catch (e) {
        return { status: "error", message: e.toString() };
    }
};

export const UserOTPService = async (req) => {
    try {
        let email = req.params.email;
        let code = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
        let EmailText = `Your verification code is: ${code}`;
        let EmailSubject = 'Email Verification';

        // Send email (ensure EmailSend function is defined and works correctly)
        await EmailSend(email, EmailText, EmailSubject);

        // Update the user's OTP in the database
        await UserM0del.updateOne(
            { email: email },         // Filter
            { $set: { otp: code } }   // Update operation
        );

        console.log(`OTP sent to ${email} and stored in the database.`);
    } catch (error) {
        console.error('Error in UserOTPService:', error);
        throw error; // Re-throw error to handle it elsewhere if needed
    }
};

export const VerifyOTPService=async (req)=>{
    try {
        let reqBody = req.body;
        let data = await UsersModel.create(reqBody);
        return { status: "success", data: data };
    } catch (e) {
        return { status: "error", message: e.toString() };
    }
}


