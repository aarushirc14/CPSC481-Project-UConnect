// src/components/pages/posts/CreatePostPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TipTap from "../../TipTap";

export default function CreatePostPage() {
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate("/sent-viewresult"); // After posting either return to home or go straight to Post view, for now it's home
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="m-auto max-w-7xl">
      <div className="flex-1 p-6 mt-10 ml-40 transition ">
        <p className="text-center text-3xl font-bold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
          Create Post
        </p>
        <div className=" dark:bg-uConnectDark-textBox  bg-uConnectLight-layer3 rounded-md dark:text-uConnectDark-textSub text-uConnectLight-textMain m-auto max-w-5xl">
          <div className="TextEditor">
            {/* Input Title */}
            <div className="top-0 left-0 px-4 py-1 flex items-center w-full mt-4 lg:mt-0 text-uConnectLight-textMain dark:text-uConnectDark-textMain">
              <input
                type="text"
                value={inputValue}
                placeholder="Title..."
                onChange={(e) => setInputValue(e.target.value)}
                className=" placeholder:italic pt-4 px-4 pb-2 text-2xl font-semibold bg-transparent placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none flex-1"
              />
            </div>
            <hr class="w-11/12 mx-auto bg-white border-1"></hr>
            {/* Input Content, The Text Editor */}
            <TipTap />
            {/* Post Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the click from propagating to the parent Link
                handlePostClick();
              }}
              className="post_button font-semibold text-xl py-1 px-4 bg-transparent border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full inline-flex items-center justify-center gap-2 hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain transition"
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
