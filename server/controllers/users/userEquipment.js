import Inventory from "../models/inventory";

export const getEquipment = async (req, res) => {
	try {
		const equipments = await Inventory.find();
		res.status(200).json(movies);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

export const issueEquipment = async (req, res) => {
	try {
		let equipment;
		await Inventory.findOne({ name: req.body.name }, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				equipment = result;
			}
		});
	} catch (err) {}
};
