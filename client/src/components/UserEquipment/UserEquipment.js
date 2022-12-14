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
	const requestIssue = (item) => {
		// e.preventDefault();
		// console.log(e);
		window.localStorage.setItem(item, true);
		if (window.localStorage.getItem(item)) {
			const butt = document.getElementById("issue");
			butt.className = "btn btn-danger disabled";
			butt.innerText = "Requested";
		}

		const username = window.localStorage.getItem("username");

		axios
			.post("http://localhost:8080/users/inventory", {
				name: item,
				username: username,
			})
			.then((res) => {
				console.log(res.data);
				navigate("/users");
			})
			.catch((err) => console.log(err));
	};
	setInterval(() => {
		inventory.forEach((item) => {
			if (item.issued) {
				window.localStorage.removeItem(item.name);
			}
			if (item.issued_by === "") {
				window.localStorage.removeItem(item.name);
			}
		});
	}, 1000);
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
											<Button variant="danger disabled">
												Already Issued
											</Button>
										) : window.localStorage.getItem(
												item.name
										  ) ? (
											<Button variant="danger disabled">
												Requested
											</Button>
										) : (
											<Button
												variant="success"
												onClick={() => {
													requestIssue(item.name);
												}}
												id="issue"
											>
												Issue
											</Button>
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		</div>
	);
}

export default UserEquipment;
