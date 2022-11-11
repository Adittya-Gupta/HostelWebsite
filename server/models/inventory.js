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
    issued_by :{
        type : String,
        required : true
    },
    time_issued :{
        type : Date,
        required : true
    }
});

const Inventory = mongoose.model('Inventory',inventorySchema);

export default Inventory;