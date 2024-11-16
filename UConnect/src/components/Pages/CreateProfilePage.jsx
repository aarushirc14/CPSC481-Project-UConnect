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
    <div className="flex w-full justify-center items-center min-h-screen bg-[#131313] px-4">
  {/* Outer Gray Box */}
  <div className="w-full max-w-5xl bg-[#414040] p-12 rounded-lg mt-8 mb-8">
    <h2 className="text-3xl font-semibold text-center text-[#C6C3C3] mb-6">
      Create Your Profile
    </h2>

    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Profile Picture Upload */}
      <div className="flex justify-center">
        <label htmlFor="profileImage" className="cursor-pointer">
          <div className="w-40 h-40 rounded-full bg-[#C6C3C3] flex justify-center items-center overflow-hidden relative border-2 border-black">
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
        <input
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 rounded bg-[#C6C3C3] text-black outline-none placeholder:text-[#000000]"
        />
      </div>

      {/* Bio Input */}
      <div>
        <textarea
          name="bio"
          value={profileData.bio}
          onChange={handleChange}
          placeholder="Bio"
          className="w-full p-3 rounded bg-[#C6C3C3] text-black outline-none resize placeholder:text-[#000000]"
          rows="4"
          style={{
            resize: "both", // Allow resizing
          }}
        />
      </div>

      {/* Dropdown Fields */}
      <div className="space-y-6">
        {/* Major Dropdown */}
        <div className="flex flex-col items-center">
          <MultiSelectDropdown
            options={majorOptions}
            label="Select Majors"
            selectedOptions={profileData.major}
            onChange={handleMajorChange}
          />
        </div>

        {/* Year Dropdown */}
        <div className="flex flex-col items-center">
          <SingleSelectDropdown
            options={yearOptions}
            label="Select Year"
            selectedOption={profileData.year}
            onChange={handleYearChange}
          />
        </div>

        {/* Courses Dropdown */}
        <div className="flex flex-col items-center">
          <MultiSelectDropdown
            options={courseOptions}
            label="Select Courses"
            selectedOptions={profileData.courses}
            onChange={handleCoursesChange}
          />
        </div>

        {/* Interests Dropdown */}
        <div className="flex flex-col items-center">
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
