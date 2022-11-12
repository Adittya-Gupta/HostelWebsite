import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './styles.css'
const MyNavbar = () => {
  let navigate = useNavigate(); 
  return ( 
    <Navbar expand="lg" variant="dark" bg="dark" className="navbar">
    <Container className='mynavbar'>
      <div>
      <Navbar.Brand href="/">
            <img
              src="data:image/png;base64,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"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
      <Navbar.Brand>IITG Hostel</Navbar.Brand>
      </div>
    
      <Nav className="justify-content-end mydiv" variant="pills">
        <Nav.Item>
        <Button variant="outline-light" className='mybtn' onClick={()=>{navigate('/users/login')}}>Student Login</Button>{' '}
        </Nav.Item>
        <Nav.Item>
        <Button variant="outline-light" className='mybtn' onClick={()=>{navigate('/admin/login')}}>Admin Login</Button>{' '}
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
   );
}
 
export default MyNavbar;