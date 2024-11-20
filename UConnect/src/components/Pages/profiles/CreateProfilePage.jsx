// src/components/pages/profiles/CreateProfilePage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineAddAPhoto } from "react-icons/md";
import MultiSelectDropdown from "../../MultiSelectDropdown";
import SingleSelectDropdown from "../../SingleSelectDropdown";
import {
  majorOptions,
  yearOptions,
  courseOptions,
  interestOptions,
} from "../../../data/dropdownOptions";
import Notification from "../../PopupMessage";

export default function CreateProfile({ onProfileCreated }) {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    major: [],
    year: null,
    courses: [],
    interests: [],
    bio: "",
    profileImage: null,
  });

  const [profileImage, setProfileImage] = useState(null); // State to store the image URL

  const [showNotification, setShowNotification] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result); // Convert image to base64
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  const handleMajorChange = (selectedMajors) =>
    setProfileData({ ...profileData, major: selectedMajors });
  const handleYearChange = (selectedYear) =>
    setProfileData({ ...profileData, year: selectedYear });
  const handleCoursesChange = (selectedCourses) =>
    setProfileData({ ...profileData, courses: selectedCourses });
  const handleInterestsChange = (selectedInterests) =>
    setProfileData({ ...profileData, interests: selectedInterests });
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if some fields are filled out - this part is buggy, only demo with either name, bio, or year missing
    if (
      !profileData.firstName.trim() || // Check if the name field is empty
      !profileData.lastName.trim() || // Check if the name field is empty
      !profileData.bio.trim() || // Check if the bio field is empty
      !profileData.year // Check if the year is not selected
    ) {
      setShowNotification(true);
      return;
    }
    // Notify App that the profile is created
    onProfileCreated();

    // If all validations pass, navigate to the HomePage
    navigate("/home");
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background px-4">
      {/* Outer Gray Box */}
      <div className="w-full max-w-5xl bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary p-12 rounded-lg mt-8 mb-8">
        <h2 className="text-3xl font-semibold text-center text-uConnectLight-layer3 dark:text-uConnectDark-layer3 mb-6">
          Create Your Profile
        </h2>
        {/* Notification Popup */}
        {showNotification && (
          <Notification
            message="Please fill out all fields!"
            type="error"
            onClose={() => setShowNotification(false)}
          />
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Upload */}
          <div className="flex justify-center">
            <label htmlFor="profileImage" className="cursor-pointer">
              <div className="w-40 h-40 rounded-full bg-uConnectLight-layer3 dark:bg-uConnectDark-layer3 flex justify-center items-center overflow-hidden relative border-2 border-black">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <MdOutlineAddAPhoto className="text-uConnectDark-textMain dark:text-uConnectLight-textMain text-4xl" />
                )}
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

          {/* Name Input */}
          <div className="flex gap-4">
            <div className="flex flex-col w-full">
              <span className="dark:text-uConnectDark-textMain text-uConnectLight-textMain">
                First Name:
              </span>
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="flex-1 p-3 rounded bg-uConnectLight-layer3 dark:bg-uConnectDark-layer3 text-uConnectDark-textMain dark:text-uConnectLight-textMain outline-none placeholder:text-uConnectDark-textMain dark:placeholder:text-uConnectLight-textMain"
              />
              <span className="text-end text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                Required Field*
              </span>
            </div>
            <div className="flex flex-col w-full">
              <span className="dark:text-uConnectDark-textMain text-uConnectLight-textMain">
                Last Name:
              </span>
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="flex-1 p-3 rounded bg-uConnectLight-layer3 dark:bg-uConnectDark-layer3 text-uConnectDark-textMain dark:text-uConnectLight-textMain outline-none placeholder:text-uConnectDark-textMain dark:placeholder:text-uConnectLight-textMain"
              />
              <span className="text-end text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                Required Field*
              </span>
            </div>
          </div>

          {/* Bio Input */}
          <div className="flex flex-col">
            <span className="dark:text-uConnectDark-textMain text-uConnectLight-textMain">
              Bio:
            </span>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              placeholder="Bio"
              className="p-3 rounded bg-uConnectLight-layer3 dark:bg-uConnectDark-layer3 text-uConnectDark-textMain dark:text-uConnectLight-textMain outline-none resize placeholder:text-uConnectDark-textMain dark:placeholder:text-uConnectLight-textMain"
              rows="4"
              style={{
                resize: "none", // Dont allow resizing?
              }}
            />
            <span className="text-end text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
              Required Field*
            </span>
          </div>

          {/* Dropdown Fields */}
          <div className="flex flex-col gap-5 pb-20">
            {/* Year Dropdown */}
            <div>
              <span className="dark:text-uConnectDark-textMain text-uConnectLight-textMain">
                Year:
              </span>
              <div className="flex flex-col h-fit">
                <SingleSelectDropdown
                  options={yearOptions}
                  label="Select Year"
                  selectedOption={profileData.year}
                  onChange={handleYearChange}
                />
                <span className="text-end text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                  Required Field*
                </span>
              </div>
            </div>

            {/* Major Dropdown */}
            <div>
              <span className="dark:text-uConnectDark-textMain text-uConnectLight-textMain">
                Major:
              </span>
              <div className="flex flex-col h-fit">
                <MultiSelectDropdown
                  className="flex-1"
                  options={majorOptions}
                  label="Select Major"
                  selectedOptions={profileData.major}
                  onChange={handleMajorChange}
                />
                <span className="text-end w-full text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                  Required Field*
                </span>
              </div>
            </div>

            {/* Courses Dropdown */}
            <div>
              <span className="dark:text-uConnectDark-textMain text-uConnectLight-textMain">
                Courses:
              </span>
              <div className="flex flex-col h-fit">
                <MultiSelectDropdown
                  options={courseOptions}
                  label="Select Courses"
                  selectedOptions={profileData.courses}
                  onChange={handleCoursesChange}
                />
                <span className="text-end text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                  Required Field*
                </span>
              </div>
            </div>

            {/* Interests Dropdown */}
            <div>
              <span className="dark:text-uConnectDark-textMain text-uConnectLight-textMain">
                Interests:
              </span>
              <div className="flex flex-col h-fit">
                <MultiSelectDropdown
                  options={interestOptions}
                  label="Select Interests"
                  selectedOptions={profileData.interests}
                  onChange={handleInterestsChange}
                />
                <span className="text-end text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                  Required Field*
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-1/4 py-3 bg-uConnectDark-accent text-uConnectDark-textMain dark:text-uConnectLight-textMain font-semibold rounded-full hover:bg-[#e08c03] transition"
            >
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
