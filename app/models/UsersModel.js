import mongoose from "mongoose";

const DataSchema=mongoose.Schema(
    {
    email: {type:String},
    firstName:{type:String},
    lastName:{type:String},
    NIDNumber:{type:String},
    phoneNumber:{type:String},
    password:{type:String},
    bloodGroup:{type:String},
    // profileID:{type:mongoose.Schema.Types.ObjectId, required:true},

},{timestamps:true,versionKey:false});

const UsersModel=mongoose.model('users',DataSchema);

export default UsersModel