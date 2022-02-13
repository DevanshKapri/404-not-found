import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  ;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;