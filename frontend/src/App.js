import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Home from "./components/Home";
import Added from "./components/Added";
import Auth from "./components/Auth";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/added" element={<Added />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
