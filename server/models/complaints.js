import mongoose from "mongoose";

const complaintSchema = mongoose.Schema({
    Type:{
        type: String,
        required : true
    },
    description:{
        type : String,
    },
    from :{
        type : String,
        required : true
    },
    solved_status :{
        type : Boolean,
        required : true
    }
});

const Admin = mongoose.model('Admin',adminSchema);

export default Admin;