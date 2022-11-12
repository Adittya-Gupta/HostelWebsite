import Container from "react-bootstrap/esm/Container";
import ComplaintList from "./ComplaintList";
import InventoryList from "./InventoryList";
const AdminPanel = () => {
	return (
		<Container>
			<div>
				<InventoryList />
			</div>
			<div>
				<ComplaintList />
			</div>
		</Container>
	);
};

export default AdminPanel;
