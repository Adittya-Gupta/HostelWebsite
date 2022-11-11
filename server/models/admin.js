import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    username:{
        type : String,
        requred : true
    },
    password :{
        type : String,
        required : true
    },
    post :{
        type : String,
        required : true
    }
});

const Admin = mongoose.model('Admin',adminSchema);

export default Admin;