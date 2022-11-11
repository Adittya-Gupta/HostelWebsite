import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type : String,
        requred : true
    },
    password :{
        type : String,
        required : true
    },
    name :{
        type : String,
        required : true
    },
    room_number :{
        type : String,
        required : true
    }
});

const User = mongoose.model('User',userSchema);

export default User;