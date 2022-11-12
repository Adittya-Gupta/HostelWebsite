import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ComplaintList() {
	const navigate = useNavigate();
	let mydata = [];
	const [complaints, setComplaints] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8080/admin/complaints")
			.then((res) => (mydata = res.data))
			.then(() => setComplaints(mydata));
	}, []);

	const handlesolve = (id, Type, description, from) => {
		const solved_status = true;
		const data = { id, Type, description, from, solved_status };
		axios
			.put("http://localhost:8080/admin/complaints", data)
			.then((res) => {
				if (res.data === "OK") window.location.href = "/admin";
			});
	};
	return (
		<div>
			<h1>Complaints List</h1>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>#</th>
						<th>Type</th>
						<th>description</th>
						<th>from</th>
						<th>Solved Status</th>
					</tr>
				</thead>
				<tbody>
					{complaints.map((item, index) => {
						console.log(item);
						return (
							<tr>
								<td>{index + 1}</td>
								<td>{item.Type}</td>
								<td>{item.description}</td>
								<td>{item.from}</td>
								<td>
									{item.solved_status
										? "Solved"
										: "Not Solved"}
								</td>
								<td>
									{item.solved_status ? (
										<Button variant="success disabled">
											Solved
										</Button>
									) : (
										<Button
											variant="info"
											onClick={() =>
												handlesolve(
													item._id,
													item.Type,
													item.description,
													item.from
												)
											}
										>
											Solve
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

export default ComplaintList;
