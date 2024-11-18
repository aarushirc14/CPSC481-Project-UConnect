// src/components/pages/profiles/EditProfilePage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import Sidebar from "../../Sidebar";
import SearchBar from "../../SearchBar";
import sofiaMartinez from "../../../assets/profilePics/sofiaMartinez.jpg";

export default function EditProfilePage() {
  const user = {
    profileImage: sofiaMartinez,
    firstName: "Sofia",
    lastName: "Martinez",
    major: "Environmental Science",
    year: "1st Year",
    bio: "I love field research, learning about climate change solutions, and volunteering in conservation efforts. In my free time, you’ll find me hiking, attending eco-workshops, or experimenting with DIY eco-friendly projects.",
    courses: ["BIOL 241", "CHEM 201", "MATH 211", "PHYS 211", "ENSC 201"],
    interests: ["Camping", "Hiking", "Photography", "Reading"],
  };

  const [profileData, setProfileData] = useState({
    profileImage: user.profileImage,
    firstName: user.firstName,
    lastName: user.lastName,
    major: user.major,
    year: user.year,
    bio: user.bio,
    courses: user.courses,
    interests: user.interests,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () =>
        setProfileData((prev) => ({
          ...prev,
          profileImage: reader.result,
        }));
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();

  const saveChangesClick = () => {
    navigate("/edited-profile");
  };

  return (
    <div className="flex min-h-screen bg-[#131313] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Search Bar */}
        <div className="sticky top-0 bg-[#131313] z-10">
          <SearchBar />
        </div>

        {/* Edit Profile Form */}
        <div className="flex flex-col items-center justify-center py-8">
          <form className="w-full max-w-3xl bg-[#414040] p-8 rounded-lg space-y-6">
            {/* Profile Picture Upload */}
            <div className="flex flex-col items-center relative">
              <label htmlFor="profileImage" className="cursor-pointer relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-uConnectDark-textMain dark:border-uConnectLight-textMain mb-4">
                  <img
                    src={profileData.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Pencil Icon */}
                <div className="absolute bottom-6 right-1 bg-[#FC9D04] text-black p-2 rounded-full shadow-lg">
                  <FaPencilAlt className="text-lg" />
                </div>
              </label>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {/* First and Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#FFFFFF] mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-3 rounded bg-[#C6C3C3] text-black outline-none"
                />
              </div>
              <div>
                <label className="block text-[#FFFFFF] mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-3 rounded bg-[#C6C3C3] text-black outline-none"
                />
              </div>
            </div>

            {/* Major and Year */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#FFFFFF] mb-2">Major</label>
                <input
                  type="text"
                  name="major"
                  value={profileData.major}
                  onChange={handleChange}
                  placeholder="Major"
                  className="w-full p-3 rounded bg-[#C6C3C3] text-black outline-none"
                />
              </div>
              <div>
                <label className="block text-[#FFFFFF] mb-2">Year</label>
                <input
                  type="text"
                  name="year"
                  value={profileData.year}
                  onChange={handleChange}
                  placeholder="Year"
                  className="w-full p-3 rounded bg-[#C6C3C3] text-black outline-none"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-[#FFFFFF] mb-2">Bio</label>
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                placeholder="Bio"
                className="w-full p-3 rounded bg-[#C6C3C3] text-black outline-none"
                rows="4"
              />
            </div>

            {/* Courses */}
            <div>
              <label className="block text-[#FFFFFF] mb-2">Courses</label>
              <input
                type="text"
                name="courses"
                value={profileData.courses.join(", ")}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    courses: e.target.value.split(",").map((c) => c.trim()),
                  })
                }
                placeholder="Enter courses separated by commas"
                className="w-full p-3 rounded bg-[#C6C3C3] text-black outline-none"
              />
            </div>

            {/* Interests */}
            <div>
              <label className="block text-[#FFFFFF] mb-2">Interests</label>
              <input
                type="text"
                name="interests"
                value={profileData.interests.join(", ")}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    interests: e.target.value.split(",").map((i) => i.trim()),
                  })
                }
                placeholder="Enter interests separated by commas"
                className="w-full p-3 rounded bg-[#C6C3C3] text-black outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                onClick={saveChangesClick}
                className="px-6 py-3 bg-[#FC9D04] text-uConnectDark-textMain dark:text-uConnectLight-textMain font-semibold rounded-full hover:bg-[#e08c03] transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
