// src/components/pages/CreateProfile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MultiSelectDropdown from "../MultiSelectDropdown";

export default function CreateProfile() {
  const navigate = useNavigate();

  // State for form inputs
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    major: [],
    bio: "",
    profileImage: null,
  });

  // Options for the "Major" field
  const majorOptions = [
    { value: "accounting", label: "Accounting" },
    { value: "actuarial_science", label: "Actuarial Science" },
    { value: "environmental_science", label: "Environmental Science" },
    { value: "physics", label: "Physics" },
    { value: "computer_science", label: "Computer Science" },
    // Add more options as needed
  ];

  // Handler for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Handler for selected majors
  const handleMajorChange = (selectedMajors) => {
    setProfileData({ ...profileData, major: selectedMajors });
  };

  // Handler for file input
  const handleImageChange = (e) => {
    setProfileData({ ...profileData, profileImage: e.target.files[0] });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile creation logic here (e.g., send to backend or store locally)

    // Redirect to the home page after profile creation
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#131313] text-white">
      <div className="bg-[#414040] p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-[#FC9D04] mb-6">
          Create Your Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-[#C6C3C3]">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
              className="w-full p-2 rounded bg-transparent border border-[#FC9D04] outline-none"
              required
            />
          </div>
          {/* Last Name */}
          <div>
            <label className="block text-[#C6C3C3]">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleChange}
              className="w-full p-2 rounded bg-transparent border border-[#FC9D04] outline-none"
              required
            />
          </div>
          {/* Major */}
          <div>
            <label className="block text-[#C6C3C3]">Major</label>
            <MultiSelectDropdown
              options={majorOptions}
              label="Select Majors"
              selectedOptions={profileData.major}
              onChange={handleMajorChange}
            />
          </div>
          {/* Bio */}
          <div>
            <label className="block text-[#C6C3C3]">Bio</label>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              className="w-full p-2 rounded bg-transparent border border-[#FC9D04] outline-none"
              rows="4"
            />
          </div>
          {/* Profile Image */}
          <div>
            <label className="block text-[#C6C3C3]">Profile Image</label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 bg-transparent text-[#FC9D04] border border-[#FC9D04]"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-[#FC9D04] text-[#131313] font-semibold rounded hover:bg-[#e08c03]"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
}
