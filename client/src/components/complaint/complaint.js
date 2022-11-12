import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
function Complaint() {
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
        const Type = document.getElementById("Type").value;
        const description = document.getElementById("description").value;
        const from = window.localStorage.getItem("username");
        const solved_status = false;
        const cred = {Type, description, from, solved_status}
        axios.post('http://localhost:8080/users/complaint', cred).then((res)=>{
          console.log(res.data)
          navigate('/users')
        }).catch(err=>console.log(err));
  }
  return (
    <Form className="login-form">
      <h1>Enter your Complain !</h1>
        <Form.Group className="mb-3">
          <Form.Label>title</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter title of complain"
            id="Type"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>description</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter it's description"
            id="description"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

  );
}

export default Complaint;
