import mongoose from "mongoose";

const inventorySchema = mongoose.Schema({
    name:{
        type : String,
        requred : true
    },
    issued :{
        type : Boolean,
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