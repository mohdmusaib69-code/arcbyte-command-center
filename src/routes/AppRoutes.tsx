import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Analytics from "../pages/Analytics";
import Agents from "../pages/Agents";
import Settings from "../pages/Settings";
import Users from "../pages/Users";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}