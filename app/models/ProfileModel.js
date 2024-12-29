import mongoose from 'mongoose';

const DataSchema=mongoose.Schema(
    {
        email: {type:String},
        otp:{type:String}
    },
    {timestamps:true,versionKey:false}
);
const ProfileModel=mongoose.model("profiles",DataSchema);
export default ProfileModel