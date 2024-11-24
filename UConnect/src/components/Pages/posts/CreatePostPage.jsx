// src/components/pages/posts/CreatePostPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import TipTap from "../../TipTap";


export default function CreatePostPage() {
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate("/sent-viewresult");      // After posting either return to home or go straight to Post view, for now it's home
  };
  
    return (
      <div className=" dark:bg-uConnectDark-textBox  bg-uConnectLight-layer3 rounded-md dark:text-uConnectDark-textSub text-uConnectLight-textMain m-auto max-w-5xl transition">
        <div className="TextEditor">
          {/* Input Title */}
          <div className="top-0 left-0 px-4 py-1 flex items-center w-full mt-4 lg:mt-0 text-uConnectLight-textMain dark:text-uConnectDark-textMain">
            <input
            type="text"
            placeholder="Title..."
            className=" placeholder:italic p-4 text-xl font-semibold bg-transparent placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none flex-1"
          />
          </div>
          <hr class="w-11/12 mx-auto bg-white border-1">
          </hr>
          {/* Input Content, The Text Editor */}
          <TipTap/>
          {/* Post Button */}
          <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the click from propagating to the parent Link
                handlePostClick();
              }}
             className="post_button mt-5 px-10 py-2 bg-uConnectDark-accent text-uConnectLight-textMain font-semibold rounded-full hover:bg-[#e08c03] transition"
            >
              Post
            </button>
        </div>
      </div>
    );
  }
  