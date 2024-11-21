// src/components/pages/posts/CreatePostPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import TipTap from "../../TipTap";

import { IoMdSend } from "react-icons/io";


export default function CreatePostPage() {
  const navigate = useNavigate();

  const handlePostClick = () => {
    // Add code here where it collects input text data 
    navigate("/home");      // After posting either return to home or go straight to Post view, for now it's home
  };
  
    return (
      <div className="TextEditor">
        <TipTap/>
        <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from propagating to the parent Link
              handlePostClick();
            }}
            className="mt-5 px-10 py-2 border border-[#FC9D04] text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-lg hover:bg-[#FC9D04] hover:text-black"
          >
            <IoMdSend /> Post
          </button>
      </div>
    );
  }
  