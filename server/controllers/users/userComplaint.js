import Complaint from "../models/complaints";

export const postComplaint = (req, res) => {
	const complaint = req.body;
	const newComplaint = new Complaint(complaint);
	try {
		newComplaint.save();
		res.status(201).json(newComplaint);
	} catch (err) {
		res.json({ message: err.message });
	}
};