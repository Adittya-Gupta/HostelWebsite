import Inventory from '../../models/inventory.js';
import mongoose from 'mongoose';
export const getEquipment = async (req, res) => {
    try{
        const inventory = await Inventory.find();
        res.status(200).json(inventory);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const editEquipment = async (req, res) => {
    const {id, name, issued, issued_by, time_issued} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No equipment with id: ${id}`);
    const updatedEquipment = {name, issued, issued_by, time_issued, _id: id};
    await Inventory.findByIdAndUpdate(id, updatedEquipment, {new: true});
    res.send("OK")
}