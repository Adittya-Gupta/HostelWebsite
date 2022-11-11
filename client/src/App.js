import MyNavbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLogin from "./components/LoginPage/AdminLogin";
import UserLogin from "./components/LoginPage/UserLogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Router>
        <Routes>
          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route exact path="/user/login" element={<UserLogin />} />
        </Routes>
      </Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
