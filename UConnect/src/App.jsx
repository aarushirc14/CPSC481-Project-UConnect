// src/App.jsx
import React, { useState } from "react";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import logo from "./assets/logo/uconnect-full-logo.webp";

function App() {
  const [isLogin, setIsLogin] = useState(true); // Tracks whether LOGIN or SIGN UP form is shown
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks whether the user is logged in

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <HomePage />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#131313]">
      <img src={logo} alt="uConnect Logo" className="w-48 h-auto mb-8" />
      <div className="w-full max-w-md">
        <div className="flex justify-center space-x-8 mb-4 text-lg font-semibold">
          <h2
            className={`cursor-pointer ${!isLogin ? "login_signup_form_label border-b-2 border-[#FC9D04]" : "text-gray-500"}`}
            onClick={() => setIsLogin(false)}
          >
            SIGN UP
          </h2>
          <h2
            className={`cursor-pointer ${isLogin ? "login_signup_form_label border-b-2 border-[#FC9D04]" : "text-gray-500"}`}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </h2>
        </div>
        {isLogin ? <LoginForm onLogin={handleLogin} /> : <SignupForm />}
      </div>
    </div>
  );
}

export default App;