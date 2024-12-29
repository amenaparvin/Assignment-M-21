import express from 'express';
import * as ProfileController from '../app/controllers/ProfileController.js';
import AuthVerification from "../app/middlewares/AuthVerification.js";
import * as UserController from "../app/controllers/UserController.js";



const router = express.Router();



router.post("/ProfileUpdate",AuthVerification,ProfileController.SingleProfileUpdate)
router.get("/SingleProfile/:id",ProfileController.SingleProfileRead)
router.get("/AllProfileRead",ProfileController.AllProfileRead)
router.get("/ProfileDelete",ProfileController.SingleProfileDelete)



router.post("/Registration",UserController.UserRegistration)
router.post("/Login",UserController.UserLogin)
router.get("/UserOTP/:email",UserController.UserOTP)
router.get("/VerifyLogin/:email/:otp",UserController.VerifyOTP)



export default router;