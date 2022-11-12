import Inventory from "../../models/inventory.js";

export const getEquipment = async (req, res) => {
	try {
		const equipments = await Inventory.find();
		res.status(200).json(equipments);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

export const issueEquipment = async (req, res) => {
	try {
		const equipment = await Inventory.findOneAndUpdate(
			{ name: req.body.name },
			{ issued_by: req.body.username }
		);
		res.json(equipment);
	} catch (err) {
		console.log(err);
	}
};
