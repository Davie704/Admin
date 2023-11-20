import React from "react";
import Login from "./component/Login";
import Register from "./component/Register";
import { Routes, Route } from "react-router-dom";
import Forgot from "./component/Forgot";
import Dashboard from "./admin/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
