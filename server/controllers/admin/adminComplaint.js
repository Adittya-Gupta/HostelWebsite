import Complaint from "../../models/complaints.js";
import mongoose from "mongoose";
export const getComplaints = async (req, res) => {
	try {
		const complaints = await Complaint.find();
		res.status(200).json(complaints);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const editComplaints = async (req, res) => {
	const { id, Type, description, from, solved_status } = req.body;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No complaint with id: ${id}`);
	const updatedComplaint = {
		Type,
		description,
		from,
		solved_status,
		_id: id,
	};
	await Complaint.findByIdAndUpdate(id, updatedComplaint, { new: true });
	return res.send("OK");
};
