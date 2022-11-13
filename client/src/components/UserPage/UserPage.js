import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
function UserPage() {
	const handleClick = (name) => {
		window.location.href = `/users/${name}`;
	};
	return (
		<div className="d-flex flex-column justify-content-center">
			<div>
				<h1>Select Page</h1>
			</div>
			<div className="d-flex flex-row justify-content-center">
				<Button
					variant="primary"
					onClick={() => handleClick("equipment")}
				>
					Equipment
				</Button>
				<Button
					variant="primary"
					onClick={() => handleClick("complaint")}
				>
					Complaint
				</Button>
			</div>
		</div>
	);
}

export default UserPage;
