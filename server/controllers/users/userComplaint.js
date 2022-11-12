import Complaint from "../../models/complaints.js";

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
export const getComplaints = async (req, res) => {
	try {
		const complaints = await Complaint.find({ from: req.body.username });
		res.json(complaints);
	} catch (err) {
		res.send(err);
	}
};
