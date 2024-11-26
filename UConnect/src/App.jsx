// src/App.jsx

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SignupPage from "./components/pages/SignupPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import ChatPage from "./components/pages/ChatPage";
import MyProfilePage from "./components/pages/profiles/MyProfilePage";
//import EditProfilePage from "./components/pages/profiles/EditProfilePage";
import AfterEditingProfilePage from "./components/pages/profiles/AfterEditingProfilePage";
import NotificationsPage from "./components/pages/NotificationsPage";
import CreatePostPage from "./components/pages/posts/CreatePostPage";
import OtherUserProfilePage from "./components/pages/profiles/OtherUserProfilePage";
import DetailedPostViewPage from "./components/pages/posts/DetailedPostViewPage";
import DetailedPostViewPageNewpost from "./components/pages/posts/DetailedPostViewPageNewpost";
import CreateProfile from "./components/pages/profiles/CreateProfilePage";
import uconnectFullLogo from "./assets/logo/uconnectFullLogo.webp";
import SearchResultsPage from "./components/Pages/SearchResultsPage";
import SearchResultsPostsPage from "./components/Pages/SearchResultsPostsPage";

import sofiaMartinez from "../src/assets/profilePics/sofiaMartinez.jpg";

function AuthPage({ isLogin, setIsLogin, handleLogin }) {
  return (
    <div className="w-full max-w-md text-center">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src={uconnectFullLogo} alt="UConnect Logo" className="w-60" />
      </div>
      <div className="flex justify-center space-x-8 mb-4 text-lg font-semibold">
        <h2
          className={`cursor-pointer ${
            !isLogin
              ? "login_signup_form_label border-b-2 border-uConnectDark-accent"
              : "text-gray-500"
          }`}
          onClick={() => setIsLogin(false)}
        >
          SIGN UP
        </h2>
        <h2
          className={`cursor-pointer ${
            isLogin
              ? "login_signup_form_label border-b-2 border-uConnectDark-accent"
              : "text-gray-500"
          }`}
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
      <div className="flex min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background">
        {isLoggedIn ? (
          <>
            {/* Sidebar for logged-in users */}
            <Sidebar
              activeItem={activeItem}
              onSelectItem={setActiveItem} // Replace with actual logic
            />
            <main className="flex-1">
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/chats" element={<ChatPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/create-post" element={<CreatePostPage />} />
                <Route path="/my-profile" element={<MyProfilePage />} />
                <Route path="/search-results" element={<SearchResultsPage />} />
                <Route path="/search-results-posts" element={<SearchResultsPostsPage />} />
                <Route path="/sent-viewresult" element={<DetailedPostViewPageNewpost />} />
                <Route
                  path="/edit-profile"
                  element={
                    <CreateProfile
                      onProfileCreated={handleProfileCreated}
                      existingProfileData={{
                        firstName: "Sofia",
                        lastName: "Martinez",
                        major: [
                          {
                            value: "environmental_science",
                            label: "Environmental Science",
                          },
                        ],
                        year: { value: "1st", label: "1st" },
                        courses: [
                          { value: "BIOL 241", label: "BIOL 241" },
                          { value: "CHEM 201", label: "CHEM 201" },
                          { value: "MATH 211", label: "MATH 211" },
                          { value: "PHYS 211", label: "PHYS 211" },
                          { value: "ENSC 201", label: "ENSC 201" },
                        ],
                        interests: [
                          { value: "camping", label: "Camping" },
                          ,
                          { value: "hiking", label: "Hiking" },
                          { value: "photography", label: "Photography" },
                          { value: "reading", label: "Reading" },
                        ],
                        bio: "I love field research, learning about climate change solutions, and volunteering in conservation efforts. In my free time, you’ll find me hiking, attending eco-workshops, or experimenting with DIY eco-friendly projects.",
                        profileImage: sofiaMartinez,
                      }}
                    />
                  }
                />
                <Route
                  path="/edited-profile"
                  element={<AfterEditingProfilePage />}
                />
                <Route
                  path="/profile/:userId"
                  element={<OtherUserProfilePage />}
                />
                <Route
                  path="/post/:postId"
                  element={<DetailedPostViewPage />}
                />
                <Route
                  path="/create-profile"
                  element={
                    <CreateProfile
                      onProfileCreated={handleProfileCreated}
                      existingProfileData={null}
                    />
                  }
                />
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </main>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <Routes>
              <Route
                path="/login"
                element={
                  <AuthPage
                    isLogin={isLogin}
                    setIsLogin={setIsLogin}
                    handleLogin={handleLogin}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <AuthPage
                    isLogin={isLogin}
                    setIsLogin={setIsLogin}
                    handleLogin={handleLogin}
                  />
                }
              />
              <Route
                path="/create-profile"
                element={
                  <CreateProfile onProfileCreated={handleProfileCreated} />
                }
              />
              <Route 
                path="/search-results" 
                element={<SearchResultsPage/>}
              />
              <Route 
                path="/search-results-posts" 
                element={<SearchResultsPostsPage/>}
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
