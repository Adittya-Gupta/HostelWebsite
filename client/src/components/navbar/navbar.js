import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const MyNavbar = () => {
  let navigate = useNavigate(); 
  return ( 
    <Navbar expand="lg" variant="dark" bg="dark" className="navbar">
    <Container>
      <Navbar.Brand>IITG Hostel</Navbar.Brand>
      <Nav className="justify-content-end" variant="pills">
        <Nav.Item>
          <Nav.Link onClick={()=>navigate('/users/login')}>Student login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>navigate('/admin/login')}>Admin login</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
   );
}
 
export default MyNavbar;