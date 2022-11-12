import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const AdminPanel = () => {
  return (
    <Container>
      <div>
        <h1>Validate users</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Roll Number</th>
              <th>Name</th>
              <th>Room Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <Button variant="primary">Approve</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <Button variant="primary">Approve</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <Button variant="primary">Approve</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default AdminPanel;
