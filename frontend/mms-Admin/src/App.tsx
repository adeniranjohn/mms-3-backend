import React from "react";
import LoginForm from "./views/login/LoginForm";
// import logo from './logo.svg';import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ForgotPassword from "./views/forgot-password/forgot-password";
import ForgotPasswordForm from "./views/forgot-password/forgot-password-submit";
import ForgotPasswordSuccess from "./views/forgot-password/forgot-password-success";
import Dashboard from "./views/dashboard/dashboard";
import SignupForm1 from "./views/signup/SignForm1";
import Profile from "./views/dashboard/SwitchComponents/profile";
import Messages from "./views/dashboard/SwitchComponents/messages";
import Certificates from "./views/dashboard/SwitchComponents/certificates";
import Programs from "./views/dashboard/SwitchComponents/programs";
import Reports from "./views/dashboard/SwitchComponents/reports";
import Settings from "./views/dashboard/SwitchComponents/settings";
import Tasks from "./views/dashboard/SwitchComponents/tasks";
import AdminDashboard from "./views/dashboard/SwitchComponents/admindashboard";
import Forums from "./views/dashboard/SwitchComponents/forums";
import Mentors from "./views/dashboard/SwitchComponents/mentor/mentor";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<AdminDashboard />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="programs" element={<Programs />} />
            <Route path="reports" element={<Reports />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="profile" element={<Profile />} />
            <Route path="forum" element={<Forums />} />
            <Route path="mentors" element={<Mentors />} />
            {/* <Route path="*" element={<AdminDashboard />} /> */}
          </Route>
          <Route path="/signup1" element={<SignupForm1 />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/passwordreset" element={<ForgotPasswordForm />} />
          <Route path="/passwordsucess" element={<ForgotPasswordSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
