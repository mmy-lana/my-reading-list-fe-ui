import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "./utils/ThemeProvider"; // Import ThemeProvider
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PrivateRoute from "./pages/privateRoute/PrivateRoute";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-text-primary dark:bg-backgroundDark dark:text-textDark-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<div>Dashboard</div>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
