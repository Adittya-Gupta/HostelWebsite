import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
function UserSignUp() {
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const room_number = document.getElementById("room").value;
        const name = document.getElementById("name").value;
        const cred = {username, password, name, room_number}
        axios.post('http://localhost:8080/users/signup', cred).then((res)=>{
            window.localStorage.setItem("status", "user");
            window.localStorage.setItem("username", username);
            window.localStorage.setItem("id", res.data.id);
            navigate("/users", {replace: true});
        }).catch(err=>console.log(err));
  }
  return (
    <Form className="login-form">
      <h1>User Sign Up</h1>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="type"
          placeholder="Enter your username"
          id="username"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="type" placeholder="Enter your name" id="name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Room Number</Form.Label>
        <Form.Control
          type="type"
          placeholder="Enter your room number"
          id="room"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          id="password"
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default UserSignUp;
