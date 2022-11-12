import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";

function UserEquipment() {
	const navigate = useNavigate();
	let data = [];
	let state = true;
	const [inventory, setInventory] = useState([]);
	const [value, setValue] = useState(0);
	useEffect(() => {
		axios
			.get("http://localhost:8080/users/inventory")
			.then((res) => (data = res.data))
			.then(() => setInventory(data));
	}, [value]);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		const username = window.localStorage.getItem("username");
		const name = document.getElementById("name").value;

		axios
			.post("http://localhost:8080/users/inventory", {
				name: name,
				username: username,
			})
			.then((res) => {
				console.log(res.data);
				navigate("/users");
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div>
				<h1>Items List</h1>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Issued</th>
							<th>Issued by</th>
							<th>Time issued</th>
						</tr>
					</thead>
					<tbody>
						{inventory.map((item, index) => {
							// console.log(item)
							return (
								<tr>
									<td>{index + 1}</td>
									<td>{item.name}</td>
									<td>{item.issued ? "YES" : "NO"}</td>
									<td>
										{item.issued ? item.issued_by : "N/A"}
									</td>
									<td>
										{item.issued ? item.time_issued : "N/A"}
									</td>
									<td>
										{item.issued ? (
											<Button variant="success">
												Check In
											</Button>
										) : (
											<Button variant="danger">
												Check out
											</Button>
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>

			<Form className="login-form">
				<h1>Issue Items</h1>
				<Form.Group className="mb-3">
					{/* <Form.Label>title</Form.Label> */}
					<Form.Control
						type="Text"
						placeholder="Enter exact name of an available item"
						id="name"
					/>
				</Form.Group>
				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default UserEquipment;
