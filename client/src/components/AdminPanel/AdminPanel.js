import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const AdminPanel = () => {
  const navigate = useNavigate()
  let data=[];
  let state = true;
  const [inventory, setInventory]=useState([]);
  axios.get("http://localhost:8080/admin/equipment").then((res) => (data = res.data)).then(()=>setInventory(data));
  let mydata = []
  const [complaints, setComplaints]=useState([]);
  axios.get("http://localhost:8080/admin/complaints").then((res) => (mydata = res.data)).then(()=>setComplaints(mydata));
  // const cnt=1;
  // useEffect(()=> setInventory(Object.values(data)), [cnt]);
  // console.log(inventory)
  const handlecheckin = (name, id, issued_by)=>{
    const issued = false;
    const time_issued = Date.now()
    const data = {id, name, issued, issued_by, time_issued}
    axios.put("http://localhost:8080/admin/equipment",data).then((res)=>{
      if(res.data==="OK") navigate("/admin", {replace: true});
    })
  }

  const handlecheckout = (name, id, issued_by)=>{
    const issued = true;
    const time_issued = Date.now()
    const data = {id, name, issued, issued_by, time_issued}
    axios.put("http://localhost:8080/admin/equipment",data).then((res)=>{
      if(res.data==="OK") navigate("/admin", {replace: true})
    })
    
  }

  const handlesolve = (id, Type, description, from)=>{
    const solved_status = true;
    const data = {id, Type, description, from, solved_status}
    axios.put("http://localhost:8080/admin/complaints",data).then((res)=>{
      if(res.data==="OK") navigate("/admin", {replace: true})
    })
  }
  return (
    <Container>
      <div>
        <h1>Items List</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Issued</th>
              <th>Issued by</th>
              <th>Time issued</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item,index) => {
              // console.log(item)
              return (    
            <tr>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.issued ? "YES" : "NO"}</td>
              <td>{item.issued ? item.issued_by : "N/A"}</td>
              <td>{item.issued ? item.time_issued : "N/A"}</td>
              <td>{item.issued ? <Button variant="success" onClick={()=>handlecheckin(item.name, item._id, item.issued_by)}>Check In</Button> : <Button variant="danger disabled" onClick={()=>handlecheckout(item.name, item._id)}>Check out</Button>}
              </td>
              </tr>
                )
              })}
            
          </tbody>
        </Table>
      </div>
      <div>
        <h1>Complaints List</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>description</th>
              <th>from</th>
              <th>Solved Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((item,index) => {
              console.log(item)
              return (    
            <tr>
              <td>{index+1}</td>
              <td>{item.Type}</td>
              <td>{item.description}</td>
              <td>{item.from}</td>
              <td>{item.solved_status ? "Not Solved" : "N/A"}</td>
              <td>{item.solved_status ? <Button variant="success disabled" >Solved</Button> : <Button variant="info" onClick={()=>handlesolve(item.name, item._id)}>Solve</Button>}
              </td>
              </tr>
                )
              })}
            
          </tbody>
        </Table>
      </div>
      
    </Container>
  );
};

export default AdminPanel;
