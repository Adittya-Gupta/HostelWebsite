import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="navbar">
      <Container>
        <Navbar.Brand>IITG Hostel</Navbar.Brand>
        <Nav className="justify-content-end" variant="pills">
          <Nav.Item>
            <Nav.Link>Student login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Admin login</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
