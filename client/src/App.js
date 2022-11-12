import MyNavbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLogin from "./components/LoginPage/AdminLogin";
import UserLogin from "./components/LoginPage/UserLogin";
import HomePage from "./components/HomePage/HomePage";
import UserSignUp from "./components/SignUpPage/UserSignUp";
import AdminPanel from "./components/AdminPanel/AdminPanel";
function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/users/login" element={<UserLogin />} />
          <Route path="/users/signup" element={<UserSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
