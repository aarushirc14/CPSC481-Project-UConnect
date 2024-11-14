
// src/App.jsx
import React, { useState } from "react";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import logo from "./assets/uconnect-full-logo.webp";

function App() {
  const [isLogin, setIsLogin] = useState(true);// Set to true to load login page by default

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#131313]">
      <img src={logo} alt="uConnect Logo" className="w-48 h-auto mb-8" />
      <div className="w-full max-w-md">
        <div className="flex justify-center space-x-8 mb-4 text-lg font-semibold">
          <h2
            className={`cursor-pointer ${isLogin ? "login_signup_form_label border-b-2 border-[#FC9D04]" : "text-gray-500"}`}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </h2>
          <h2
            className={`cursor-pointer ${!isLogin ? "login_signup_form_label border-b-2 border-[#FC9D04]" : "text-gray-500"}`}
            onClick={() => setIsLogin(false)}
          >
            SIGNUP
          </h2>
        </div>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}

export default App;

