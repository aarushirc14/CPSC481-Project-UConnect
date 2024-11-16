import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineAddAPhoto } from "react-icons/md";
import MultiSelectDropdown from "../MultiSelectDropdown";
import SingleSelectDropdown from "../SingleSelectDropdown";
import { majorOptions, yearOptions, courseOptions, interestOptions } from "../../data/dropdownOptions";

export default function CreateProfile() {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    firstName: "",
    major: [],
    year: null,
    courses: [],
    interests: [],
    bio: "",
    profileImage: null,
  });

//   const majorOptions = [
//     { value: "accounting", label: "Accounting" },
//     { value: "actuarial_science", label: "Actuarial Science" },
//   ];
//   const yearOptions = [
//     { value: "1st", label: "1st" },
//     { value: "2nd", label: "2nd" },
//     { value: "3rd", label: "3rd" },
//     { value: "4th", label: "4th" },
//     { value: "5th", label: "5th" },
//     { value: "internship", label: "Internship" },
//     { value: "other", label: "Other" },
//   ];
//   const courseOptions = [
//     { value: "acwr_201", label: "ACWR 201" },
//     { value: "acwr_203", label: "ACWR 203" },
//   ];
//   const interestOptions = [
//     { value: "astrology", label: "Astrology" },
//     { value: "acroyoga", label: "Acroyoga" },
//   ];

  const [profileImage, setProfileImage] = useState(null); // State to store the image URL

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
//   const handleImageChange = (e) =>
//     setProfileData({ ...profileData, profileImage: e.target.files[0] });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#131313]">
      {/* Outer Gray Box */}
      <div className="w-full max-w-6xl bg-[#414040] p-10 rounded-lg mt-8 mb-8">
        <h2 className="text-3xl font-semibold text-center text-[#C6C3C3] mb-6">
          Create Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Upload */}
          <div className="flex justify-center">
            <label htmlFor="profileImage" className="cursor-pointer">
                <div className="w-28 h-28 rounded-full bg-[#C6C3C3] flex justify-center items-center overflow-hidden relative">
                {profileImage ? (
                    <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    />
                ) : (
                    <MdOutlineAddAPhoto className="text-black text-4xl" />
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
          <div>
            <label className="block text-[#C6C3C3]">Name</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded bg-[#C6C3C3] text-black outline-none placeholder:text-[#6B6B6B]"
            />
          </div>

          {/* Bio Input */}
          <div>
            <label className="block text-[#C6C3C3]">Bio</label>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
              className="w-full p-3 rounded bg-[#C6C3C3] text-black outline-none resize placeholder:text-[#6B6B6B]"
              rows="4"
              style={{ resize: "both" }}
            />
          </div>

          {/* Centered Dropdown Fields */}
          <div className="grid grid-cols-2 gap-6">
            {/* Major Dropdown */}
            <div className="flex flex-col">
                <label className="block text-[#C6C3C3] mb-2">Major</label>
                <div className="flex-1">
                <MultiSelectDropdown
                    options={majorOptions}
                    label="Select Majors"
                    selectedOptions={profileData.major}
                    onChange={handleMajorChange}
                />
                </div>
            </div>

            {/* Year Dropdown */}
            <div className="flex flex-col">
                <label className="block text-[#C6C3C3] mb-5">Year</label>
                <div className="flex-1">
                <SingleSelectDropdown
                    options={yearOptions}
                    label="Select Year"
                    selectedOption={profileData.year}
                    onChange={handleYearChange}
                />
                </div>
            </div>

            {/* Courses Dropdown */}
            <div>
              <label className="block text-[#C6C3C3] mb-2">Courses</label>
              <MultiSelectDropdown
                options={courseOptions}
                label="Select Courses"
                selectedOptions={profileData.courses}
                onChange={handleCoursesChange}
              />
            </div>

            {/* Interests Dropdown */}
            <div>
              <label className="block text-[#C6C3C3] mb-2">Interests</label>
              <MultiSelectDropdown
                options={interestOptions}
                label="Select Interests"
                selectedOptions={profileData.interests}
                onChange={handleInterestsChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
                type="submit"
                className="w-1/4 py-3 bg-[#FC9D04] text-[#000000] font-semibold rounded-full hover:bg-[#e08c03] transition"
            >
                Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
