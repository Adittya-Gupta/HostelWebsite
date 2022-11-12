import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

function InventoryList() {
	const navigate = useNavigate();
	let data = [];
	let state = true;
	const [inventory, setInventory] = useState([]);
	const [value, setValue] = useState(0);
	useEffect(() => {
		axios
			.get("http://localhost:8080/admin/equipment")
			.then((res) => (data = res.data))
			.then(() => setInventory(data));
	}, [value]);

	let mydata = [];

	// const cnt=1;
	// useEffect(()=> setInventory(Object.values(data)), [cnt]);
	// console.log(inventory)
	const handlecheckin = (name, id, issued_by) => {
		const issued = false;
		console.log("Check in called");
		const time_issued = Date.now();
		const data = { id, name, issued, issued_by: "", time_issued };
		// useEffect(() => {
		axios.put("http://localhost:8080/admin/equipment", data).then((res) => {
			console.log(res);
			if (res.data === "OK") window.location.href = "/admin";
		});
		setValue(value + 1);
		// }, []);
	};

	const handlecheckout = (name, id, issued_by) => {
		const issued = true;
		const time_issued = Date.now();
		console.log("Checkout called");
		const data = { id, name, issued, issued_by, time_issued };
		// useEffect(() => {
		axios.put("http://localhost:8080/admin/equipment", data).then((res) => {
			if (res.data === "OK") window.location.href = "/admin";
		});
		setValue(value + 1);
		// }, []);
	};

	return (
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
									{item.issued_by ? item.issued_by : "N/A"}
								</td>
								<td>
									{item.issued ? item.time_issued : "N/A"}
								</td>
								<td>
									{item.issued ? (
										<Button
											variant="success"
											onClick={() =>
												handlecheckin(
													item.name,
													item._id,
													item.issued_by
												)
											}
										>
											Check In
										</Button>
									) : item.issued_by ? (
										<Button
											variant="danger"
											onClick={() =>
												handlecheckout(
													item.name,
													item._id
												)
											}
										>
											Issue
										</Button>
									) : (
										<Button
											variant="danger disabled"
											onClick={() =>
												handlecheckout(
													item.name,
													item._id
												)
											}
										>
											Free
										</Button>
									)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}

export default InventoryList;
