import User from "../../models/users.js";

export const validateUser = async (req, res) => {
	const cred = req.body;
	User.findOne({ username: cred.username }, (err, admin) => {
		if (err) {
			console.log(err);
			res.status(500).send(err);
		} else if (!admin) {
			res.status(404).send("User with this username does not exist");
		} else {
			if (admin.password === cred.password) {
				res.status(200).send("Admin validated");
			} else {
				res.status(401).send("Incorrect password");
			}
		}
	});
};

export const userSignup = async (req, res) => {
	console.log(req);
	await User.find({ username: req.body.username }, (err, user) => {
		if (err) {
			res.json({ message: err.message });
			return;
		}
		if (user) {
			res.json({ message: "User already exists" });
		} else {
			try {
				const user = new User(req.body);
				user.save();
				res.status(201).json(user);
			} catch (err) {
				res.json({ message: err.message });
			}
		}
	});
};
