import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
function UserLogin() {
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const cred = {username, password}
        axios.post('http://localhost:8080/users/login', cred).then((res)=>{
          if(res.data.result==="Admin validated"){
            window.localStorage.setItem("status", "user");
            window.localStorage.setItem("username", res.data.username);
            window.localStorage.setItem("id", res.data.id);
            navigate("/users", {replace: true});
          }
          else alert(res.data.result);
        }).catch(err=>console.log(err));
  }
  return (
    <Form className="login-form">
      <h1>User Login</h1>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="type"
            placeholder="Enter your username"
            id="username"
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
        <Button variant="primary" onClick={()=>navigate('/users/signup')}>
          Sign Up
        </Button>
      </Form>

  );
}

export default UserLogin;
