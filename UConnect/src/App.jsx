// src/App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SignupPage from "./components/pages/SignupPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import ChatPage from "./components/pages/ChatPage";
import MyProfilePage from "./components/pages/profiles/MyProfilePage";
import EditProfilePage from "./components/pages/profiles/EditProfilePage";
import AfterEditingProfilePage from "./components/pages/profiles/AfterEditingProfilePage";
import NotificationsPage from "./components/pages/NotificationsPage";
import CreatePostPage from "./components/pages/posts/CreatePostPage";
import OtherUserProfilePage from "./components/pages/profiles/OtherUserProfilePage";
import DetailedPostViewPage from "./components/pages/posts/DetailedPostViewPage";
import CreateProfile from "./components/pages/profiles/CreateProfilePage";
import uconnectFullLogo from "./assets/logo/uconnectFullLogo.webp";

function AuthPage({ isLogin, setIsLogin, handleLogin }) {
  return (
    <div className="w-full max-w-md text-center">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src={uconnectFullLogo} alt="UConnect Logo" className="w-60" />
      </div>
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
      {isLogin ? <LoginPage onLogin={handleLogin} /> : <SignupPage />}
    </div>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleProfileCreated = () => {
    setIsLoggedIn(true);
  };

  const [activeItem, setActiveItem] = useState("home");

  return (
    <Router>
      <div className="flex min-h-screen bg-[#131313]">
        {isLoggedIn ? (
          <>
            {/* Sidebar for logged-in users */}
            <Sidebar
              activeItem={activeItem} onSelectItem={setActiveItem} // Replace with actual logic
            />
            <main className="flex-1">
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/chats" element={<ChatPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/create-post" element={<CreatePostPage />} />
                <Route path="/my-profile" element={<MyProfilePage />} />
                <Route path="/edit-profile" element={<EditProfilePage/>} />
                <Route path="/edited-profile" element={<AfterEditingProfilePage />} />
                <Route path="/profile/:userId" element={<OtherUserProfilePage />} />
                <Route path="/post/:postId" element={<DetailedPostViewPage />} />
                <Route path="/create-profile" element={<CreateProfile onProfileCreated={handleProfileCreated} />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </main>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <Routes>
              <Route
                path="/login"
                element={<AuthPage isLogin={isLogin} setIsLogin={setIsLogin} handleLogin={handleLogin} />}
              />
              <Route
                path="/signup"
                element={<AuthPage isLogin={isLogin} setIsLogin={setIsLogin} handleLogin={handleLogin} />}
              />
              <Route
                path="/create-profile"
                element={<CreateProfile onProfileCreated={handleProfileCreated} />}
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
