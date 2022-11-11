import mongoose from "mongoose";

const complaintSchema = mongoose.Schema({
	Type: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	from: {
		type: String,
		required: true,
	},
	solved_status: {
		type: Boolean,
		required: true,
	},
});

const Complaint = mongoose.model('Complaint',adminSchema);
const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;

export default Complaint;