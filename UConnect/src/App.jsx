// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import logo from "./assets/logo/uconnectFullLogo.webp";
import SignupForm from "./components/pages/SignupPage";
import LoginForm from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import OtherUserProfilePage from "./components/pages/profiles/OtherUserProfilePage";
import DetailedPostViewPage from "./components/pages/posts/DetailedPostViewPage";
import CreateProfile from "./components/pages/CreateProfile";

function AuthPage({ isLogin, setIsLogin, handleLogin }) {
  const navigate = useNavigate();

  const toggleView = (view) => {
    setIsLogin(view === "login");
    navigate(`/${view}`);
  };

  return (
    <div className="w-full max-w-md text-center">
      <img src={logo} alt="uConnect Logo" className="w-48 h-auto mb-8" />
      <div className="flex justify-center space-x-8 mb-4 text-lg font-semibold">
        <h2
          className={`cursor-pointer ${!isLogin ? "login_signup_form_label border-b-2 border-[#FC9D04]" : "text-gray-500"}`}
          onClick={() => toggleView("signup")}
        >
          SIGN UP
        </h2>
        <h2
          className={`cursor-pointer ${isLogin ? "login_signup_form_label border-b-2 border-[#FC9D04]" : "text-gray-500"}`}
          onClick={() => toggleView("login")}
        >
          LOGIN
        </h2>
      </div>
      {isLogin ? <LoginForm onLogin={handleLogin} /> : <SignupForm />}
    </div>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(true); // Tracks whether LOGIN or SIGN UP form is shown
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks whether the user is logged in

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#131313]">
        {!isLoggedIn ? (
          // Public routes for Login/Signup UI
          <Routes>
            <Route
              path="/login"
              element={<AuthPage isLogin={isLogin} setIsLogin={setIsLogin} handleLogin={handleLogin} />}
            />
            <Route
              path="/signup"
              element={<AuthPage isLogin={isLogin} setIsLogin={setIsLogin} handleLogin={handleLogin} />}
            />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          // Protected routes for logged-in users
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:userId" element={<OtherUserProfilePage />} />
            <Route path="/post/:postId" element={<DetailedPostViewPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
