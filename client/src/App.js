import MyNavbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLogin from "./components/LoginPage/AdminLogin";
import UserLogin from "./components/LoginPage/UserLogin";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar></MyNavbar>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/user/login" element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
