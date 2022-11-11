import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles.css";

function UserSignUp() {
  return (
    <Form className="login-form">
      <h1>User Sign Up</h1>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="type"
          placeholder="Enter your username"
          id="email"
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserSignUp;
