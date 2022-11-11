import User from "../../models/users.js";

export const showUsers = async (req, res) => {
	try {
		const users = await User.find({ authorized: false });
		res.status(200).json(users);
	} catch (err) {
		res.json({ message: err.message });
	}
};

export const acceptUser = async (req, res) => {
	try {
		const user = await User.findOneAndUpdate(
			{ username: req.body.username },
			{ authorized: true },
			{ new: true }
		);
		res.status(201).json(user);
	} catch (err) {
		res.json({ message: err.message });
	}
};

export const deleteUser = async (req, res) => {
	try {
		await User.findOneAndDelete({ username: req.body.username });
		res.send("Success");
	} catch (err) {
		res.send("Failed");
	}
};
