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

export default function CreateProfile({
  onProfileCreated,
  existingProfileData,
  changes,
  setChanges,
}) {
  const navigate = useNavigate();

  const editing = existingProfileData;

  const [profileData, setProfileData] = useState(
    existingProfileData || {
      firstName: "",
      lastName: "",
      major: [],
      year: null,
      courses: [],
      interests: [],
      bio: "",
      profileImage: null,
    }
  );

  const [showNotification, setShowNotification] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () =>
        setProfileData({ ...profileData, profileImage: reader.result }); // Convert image to base64
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });

    setChanges(true);
  };
  const handleMajorChange = (selectedMajors) => {
    if (editing !== profileData && editing) setChanges(true);
    setProfileData({ ...profileData, major: selectedMajors });
  };
  const handleYearChange = (selectedYear) => {
    if (editing !== profileData && editing) setChanges(true);
    setProfileData({ ...profileData, year: selectedYear });
  };
  const handleCoursesChange = (selectedCourses) => {
    if (editing !== profileData && editing) setChanges(true);
    setProfileData({ ...profileData, courses: selectedCourses });
  };
  const handleInterestsChange = (selectedInterests) => {
    if (editing !== profileData && editing) setChanges(true);
    setProfileData({ ...profileData, interests: selectedInterests });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const isFirstNameEmpty = !profileData.firstName.trim(); // no first name
    const isLastNameEmpty = !profileData.lastName.trim(); // no last name
    const isYearNotSelected = !profileData.year; // no year
    const isProfileImageMissing = !profileData.profileImage; // no pfp
    const isMajorEmpty = profileData.major.length <= 0; // empty major
    const isCoursesEmpty = profileData.courses.length <= 0; // empty courses
    const isInterestsEmpty = profileData.interests.length <= 0; // empty interst

    if (
      isFirstNameEmpty ||
      isLastNameEmpty ||
      isYearNotSelected ||
      isProfileImageMissing ||
      isMajorEmpty ||
      isCoursesEmpty ||
      isInterestsEmpty
    ) {
      setShowNotification(true);
      return;
    }
    // Notify App that the profile is created
    onProfileCreated();

    // If all validations pass, navigate to AfterEditingProfilePage (if editing) or HomePage (if creating profile)

    {
      editing ? navigate("/edited-profile") : navigate("/home");
    }
  };

  const revertChanges = () => {
    setProfileData(editing);
    setChanges(false);
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background px-4 m-auto max-w-7xl ">
      {/* Outer Gray Box */}
      <div className="w-full max-w-5xl bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary p-12 rounded-lg mt-8 mb-8">
        <h2 className="text-3xl font-semibold text-center text-uConnectLight-textMain dark:text-uConnectDark-textMain mb-6">
          {editing ? "Edit Your Profile" : "Create Your Profile"}
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
            <label
              htmlFor="profileImage"
              className="cursor-pointer w-full flex justify-center flex-col items-center"
            >
              <div
                className={`w-40 h-40 rounded-full bg-uConnectLight-layer3 dark:bg-uConnectDark-layer3 flex justify-center items-center overflow-hidden relative border-2 border-black ${
                  showNotification && !profileData.profileImage
                    ? "border-red-500 border-4"
                    : ""
                }`}
              >
                {profileData.profileImage ? (
                  <img
                    src={profileData.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <MdOutlineAddAPhoto className="text-uConnectDark-textMain dark:text-uConnectLight-textMain text-4xl" />
                )}
              </div>
              <span className="text-center w-full text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                Required*
              </span>
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
              <span
                className={`text-uConnectLight-textMain dark:text-uConnectDark-textMain `}
              >
                First Name:
              </span>
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className={`flex-1 p-3 rounded bg-[#c6c3c3] dark:bg-uConnectDark-layer3 text-uConnectLight-textMain outline-none placeholder:text-uConnectDark-textSub dark:placeholder:text-uConnectLight-textSub ${
                  showNotification && !profileData.firstName.trim()
                    ? "outline-red-500"
                    : ""
                } `}
              />
              <span className="text-end text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                Required*
              </span>
            </div>
            <div className="flex flex-col w-full">
              <span className="text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                Last Name:
              </span>
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className={`flex-1 p-3 rounded bg-[#c6c3c3] dark:bg-uConnectDark-layer3 text-uConnectLight-textMain outline-none placeholder:text-uConnectDark-textSub dark:placeholder:text-uConnectLight-textSub ${
                  showNotification && !profileData.lastName.trim()
                    ? "outline-red-500"
                    : ""
                }`}
              />
              <span className="text-end text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                Required*
              </span>
            </div>
          </div>

          {/* Bio Input */}
          <div className="flex flex-col">
            <span className="text-uConnectLight-textMain dark:text-uConnectDark-textMain">
              Bio:
            </span>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              placeholder="Bio"
              className="p-3 rounded bg-[#c6c3c3] dark:bg-uConnectDark-layer3 text-uConnectLight-textMain outline-none resize placeholder:text-uConnectDark-textSub dark:placeholder:text-uConnectLight-textSub"
              rows="4"
              style={{
                resize: "none", // Dont allow resizing?
              }}
            />
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
                  Required*
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
                  existingSelectedOptions={profileData.major}
                  onChange={handleMajorChange}
                />
                <span className="text-end w-full text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                  Required*
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
                  existingSelectedOptions={profileData.courses}
                  onChange={handleCoursesChange}
                />
                <span className="text-end text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                  Required*
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
                  existingSelectedOptions={profileData.interests}
                  onChange={handleInterestsChange}
                />
                <span className="text-end text-xs italic dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                  Required*
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6 gap-16">
            {editing && (
              <button
                type="button"
                disabled={!changes}
                className="disabled:cursor-not-allowed disabled:dark:border-uConnectDark-layer3 disabled:dark:text-uConnectDark-textSub disabled:text-uConnectLight-textSub w-1/4 py-3 disabled:bg-transparent disabled:border-uConnectDark-textSub border border-uConnectDark-accent bg-uConnectDark-accent text-uConnectLight-textMain font-semibold rounded-full hover:border-red-500 hover:bg-red-500 transition"
                onClick={revertChanges}
              >
                {" "}
                Undo Changes
              </button>
            )}
            <button
              type="submit"
              className="w-1/4 py-3 bg-uConnectDark-accent text-uConnectLight-textMain font-semibold rounded-full hover:bg-[#e08c03] transition"
            >
              {editing ? "Save Changes" : "Create Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
