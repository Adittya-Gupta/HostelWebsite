import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./styles.css";

function UserLogin() {
  return (
    <Form className="login-form">
      <h1>User Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="type"
          placeholder="Enter your username"
          id="email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          id="password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className="sign-up">
        <Link to={"/users/signup"}>New User? Click Here</Link>
      </div>
    </Form>
  );
}

export default UserLogin;
