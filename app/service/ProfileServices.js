import ProfileModel from "../models/ProfileModel.js";
import mongoose from "mongoose";
import req from "express/lib/request.js";
const {ObjectId}=mongoose.Types;



export const SingleProfileReadService = async (req) => {
    try {
        let id = new ObjectId(req.params.id);
        let data = await ProfileModel.find({ _id: id });
        return { status: "success", data: data };
    } catch (e) {
        return { status: "error", message: e.toString() };
    }
};


export const AllProfileReadService = async () => {
    try {
        let data = await ProfileModel.find();
        return { status: "success", data: data };
    } catch (e) {
        return { status: "error", message: e.toString() };
    }
};

export const SingleProfileUpdateService = async () => {
    try {
        let id = new ObjectId(req.params.id);
        let data = await ProfileModel.find({ _id: id });

        return { status: "success", data: data };
    } catch (e) {
        return { status: "error", message: e.toString() };
    }
};

export const SingleProfileDeleteService = async () => {
    try {
        let id = new ObjectId(req.params.id);
        let data = await ProfileModel.find({ _id: id });

        return { status: "success", data: data };
    } catch (e) {
        return { status: "error", message: e.toString() };
    }
};
