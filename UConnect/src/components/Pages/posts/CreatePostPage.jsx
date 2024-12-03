// src/components/pages/posts/CreatePostPage.jsx

import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
//import TipTap from "../../TipTap";
const TipTap = React.lazy(() => import("../../TipTap")); //chunk larger imports for build
export default function CreatePostPage() {
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate("/sent-viewresult"); // After posting either return to home or go straight to Post view, for now it's home
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="m-auto max-w-7xl">
      <div className="flex-1 p-6 mt-10 ml-40 transition ">
        <p className="text-center text-3xl font-bold text-uConnectLight-textMain dark:text-uConnectDark-textMain"></p>
        <div className=" dark:bg-uConnectDark-textBox  bg-uConnectLight-layer3 rounded-md dark:text-uConnectDark-textSub text-uConnectLight-textMain m-auto max-w-5xl">
          <div className="TextEditor">
            {/* Input Title */}
            <div className="top-0 left-0 px-4 py-1 flex items-center w-full mt-4 lg:mt-0 text-uConnectLight-textMain dark:text-uConnectDark-textMain">
              <input
                type="text"
                value={inputValue}
                placeholder="Title (Required)"
                onChange={(e) => setInputValue(e.target.value)}
                className=" placeholder:italic pt-4 px-4 pb-2 text-2xl font-semibold bg-transparent placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none flex-1"
              />
            </div>
            <hr class="w-11/12 mx-auto bg-white border-1"></hr>
            {/* Input Content, The Text Editor */}
            <Suspense fallback={<div>Loading...</div>}>
              <TipTap />
            </Suspense>
            {/* Post Button */}

            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the click from propagating to the parent Link
                handlePostClick();
              }}
              disabled={!inputValue}
              className="post_button group/trash relative text-xl px-4 bg-transparent dark:text-uConnectLight-textMain inline-flex items-center justify-center gap-2 hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain disabled:cursor-not-allowed disabled:dark:border-uConnectDark-layer3 disabled:dark:text-uConnectDark-textSub disabled:text-uConnectLight-textSub w-1/4 py-3 disabled:bg-transparent disabled:border-uConnectDark-textSub border border-uConnectDark-accent bg-uConnectDark-accent text-uConnectLight-textMain font-semibold rounded-full hover:bg-[#e08c03] transition"
            >
              <span>Create Post</span>
              {!inputValue && (
                <div className="absolute transform bottom-full mb-3 hidden group-hover/trash:block bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10">
                  Title is Required to Post!
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
