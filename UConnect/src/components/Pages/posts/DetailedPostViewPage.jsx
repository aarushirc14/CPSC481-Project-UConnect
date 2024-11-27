// src/components/pages/posts/DetailedPostViewPage.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineInsertComment } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import {
  FaSmile,
  FaPaperPlane,
  FaSort,
} from "react-icons/fa";

import sofiaMartinez from "../../../assets/profilePics/sofiaMartinez.jpg";
import rashidaWilliams from "../../../assets/profilePics/rashidaWilliams.jpeg";
import shirleyLee from "../../../assets/profilePics/shirleyLee.webp";
import tracySmith from "../../../assets/profilePics/tracySmith.jpeg";


// Define the Poster
const poster = {
    name: "Tracy Smith",
    title: "Photography Enthusiasts",
    content: (
      <div className="mt-2.5">
        <p className="mb-6">
          Any photography enthusiasts here? Would love to connect with fellow photographers for some campus shots this weekend.
        </p>
        <img src="/src/assets/calgaryPhotography.jpg" alt="Calgary"></img>
      </div>
  ),
    image: tracySmith,
    time: "12/3/2024 - 9:24 pm",
    likes: 2,
    dislike: 0,
}; 

// Define the Current User
const currentUser = {
  name: "Sofia Martinez",
  image: sofiaMartinez,
};

// Define the commentators array
const commentedusers = [
  {
    id: 1,
    name: "Rashida Williams",
    comment: "Hi Tracy! I'm a photography enthusiast too! I'd love to join you for some campus shots this weekend. What time were you thinking of meeting up?",
    image: rashidaWilliams,
    time: "15 mins ago",
    likeStatus: "inactive",
    likes: 1,
    dislikeStatus: "inactive",
    dislikes: 0,
  },
  {
    id: 2,
    name: "Shirley Lee",
    comment: "Hey there! I'm into photography as well. I’ve been wanting to capture some sunrise or golden hour shots around campus.",
    image: shirleyLee,
    time: "30 mins ago",
    likeStatus: "inactive",
    likes: 0,
    dislikeStatus: "inactive",
    dislikes: 0,
  },
];

export default function DetailedPostViewPage() {
  {/* Update Likes and Dislikes from each Comments */}
  const [comments, setComments] = useState(commentedusers);

  const handleCommentLike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              likes: comment.likes + (comment.likeStatus === "active" ? -1 : 1),
              dislikes: comment.dislikeStatus === "active" ? comment.dislikes - 1 : comment.dislikes,
              likeStatus: comment.likeStatus === "active" ? "inactive" : "active",
              dislikeStatus: "inactive",
            }
          : comment
      )
    );
  };
  
  const handleCommentDislike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              dislikes: comment.dislikes + (comment.dislikeStatus === "active" ? -1 : 1),
              likes: comment.likeStatus === "active" ? comment.likes - 1 : comment.likes,
              dislikeStatus: comment.dislikeStatus === "active" ? "inactive" : "active",
              likeStatus: "inactive",
            }
          : comment
      )
    );
  };

  {/* Update Likes and Dislikes From the Post*/}
  const [likeStyle, setLikeStyle] = useState("inactive"); // Initialize the like status be inactive
  const [dislikeStyle, setDislikeStyle] = useState("inactive"); // Initialize the dislike status to be inactive
  const [likes, setLikes] = useState(poster.likes); // Initial likes count
  const [dislikes, setDislikes] = useState(poster.dislike); // Initial dislikes count

  const dislikeChangeStyle = () => {
      if (dislikeStyle === "inactive") {
        setDislikeStyle("active")
        setDislikes((prevDislikes) => prevDislikes + 1); // Increment dislikes by 1
        if (likes > 0 && likes > poster.likes) setLikes(likes - 1); // Decrement likes if there are any
      } else if ( dislikeStyle !== "inactive") {
          setDislikeStyle("inactive")
          if (dislikes > 0) setDislikes((prevDislikes) => prevDislikes - 1); // subract dislikes by 1
      }
    setLikeStyle("inactive")
  };

  const likeChangeStyle = () => {
    if (likeStyle === "inactive") {
      setLikeStyle("active")
      setLikes((prevLikes) => prevLikes + 1); // Increment likes by 1
      if (dislikes > 0 && dislikes > poster.dislike) setDislikes(dislikes - 1); // Decrement dislikes if there are any
    } else if ( likeStyle !== "inactive") {
        setLikeStyle("inactive")
        if (likes > 0) setLikes((prevLikes) => prevLikes - 1); // subract likes by 1
    }
    setDislikeStyle("inactive")
  };

  const [numberOfComments, setNumberComments] = useState(2);
  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  {/* Update Comment Input to include Emoji */}
  const onEmojiClick = (emojiData, event) => {
    setInputValue((prevInput) => prevInput + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  {/* Update the comment Section after submitting a post */}
  const onSubmitComment = () => {
    if (!inputValue.trim()) return; // Prevent submitting empty comments
    setComments((prevComment) => [{
      id: 1,
      name: currentUser.name,
      comment: inputValue,
      image: currentUser.image,
      time: "now",
      likeStatus: "inactive",
      likes: 0,
      dislikeStatus: "inactive",
      dislikes: 0,
      } , ...prevComment.map((comment) => ({
        ...comment,
        id: comment.id + 1, // Increment IDs of all existing comments
      })),
    ]);

    setNumberComments(numberOfComments+1);
    setInputValue("");
    setShowComments(true);
  };
  const [showComments, setShowComments] = useState(true); // choose if user want to open or close the comment section

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/home");      // Go back to home
  };

  return (
    <div className="flex min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background transition">
      <div className = "flex-1 p-6 mt-10 ml-40">
        <div className="flex">
          {/* Back Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from propagating to the parent Link
              handleBackClick();
            }}
            className=" px-4 dark:text-uConnectDark-textSub text-uConnectLight-textSub text-4xl h-full"
            >
            <IoMdArrowBack />
          </button>
          <div className = "flex-col detail_page mx-8">
            {/* Post Contents */}
            <div className=" bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary rounded-lg p-11">
              <h1 className="text-4xl font-semibold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                {poster.title}
              </h1>
              <h2 className="flex items-center mt-4 mx-4 text-xl font-semibold text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                Posted by: 
                <img src={poster.image} alt={`${poster.name}`} class="w-12 h-12 rounded-full border-2 border-[#131313] object-cover mx-2" />
                {/* Username is linked to their profile */}
                <Link to={`/profile/${poster.id}`}>
                  <span className="text-uConnectDark-accent"> {poster.name} </span>
                </Link>
              </h2>
              <h3 className="italic font-thin text-lg mx-4 mt-2 text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                {poster.time}
              </h3>
              <hr class="w-11/12 mx-auto my-5 border-uConnectLight-textMain dark:border-uConnectDark-textSub border-1"></hr>
              <p className="text-lg mx-4 text-uConnectLight-textMain dark:text-uConnectDark-textMain">
              {poster.content}
              </p>
            </div>
            {/* Comment, Like and Dislike Buttons */}
            <div className = "flex-row text-lg">
              <button className={`font-semibold mt-4 px-4 py-2 border inline-flex items-center gap-2 
                  ${ showComments === true 
                    ? "bg-uConnectDark-accent border-uConnectDark-accent dark:text-uConnectLight-textMain text-uConnectDark-textMain rounded-full hover:bg-transparent hover:dark:text-uConnectDark-textMain hover:text-uConnectLight-textMain"
                    : "border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                  }`}
                  onClick={() => setShowComments(!showComments)}>
                    <MdOutlineInsertComment /> Comment
              </button>
              <button className={`${
                          likeStyle === "inactive" 
                          ? "text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:text-uConnectDark-accent hover:dark:text-uConnectLight-accent"
                          : "text-uConnectLight-accent dark:text-uConnectDark-accent hover:text-uConnectLight-textMain hover:dark:text-uConnectDark-textMain" 
                        } mt-4 px-4 py-2 inline-flex items-center gap-2`}
                  onClick={likeChangeStyle}>
                    {likes} <BiLike />
              </button>
              <button className={`${
                          dislikeStyle === "inactive" 
                          ? "text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:text-uConnectDark-accent hover:dark:text-uConnectLight-accent"
                          : "text-uConnectLight-accent dark:text-uConnectDark-accent hover:text-uConnectLight-textMain hover:dark:text-uConnectDark-textMain" 
                        } mt-4 px-4 py-2 inline-flex gap-2 items-center`}
                  onClick={dislikeChangeStyle}
                  >
                    {dislikes} <BiDislike />
              </button>
            </div>
            {/* Input Comment */}
            <div className="flex mt-10 items-center">
              <img src={currentUser.image} alt={`${currentUser.name}`} class=" w-14 h-14 rounded-full border-2 border-[#131313] object-cover" />
              <div className=" flex-col top-0 left-0 py-1 flex w-full mt-4 lg:mt-0  text-uConnectLight-textMain dark:text-uConnectDark-textMain">
                <textarea
                  type="text"
                  value={inputValue}
                  placeholder="Comment here..."
                  onChange={(e) => setInputValue(e.target.value)}
                  className="placeholder:italic cursor-text px-3 text-xl bg-transparent mb-1.5 placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none"
                  style={{
                    height: "30px"
                  }}
                />
                <hr class=" mx-auto w-full border-uConnectLight-textMain dark:border-uConnectDark-textMain border-1"></hr>
              </div>
              {/* Set the Emoji Picker */}
              <div className="Emoji_Picker">
                <button className="mt-4 px-4 py-2 text-uConnectLight-textSub dark:text-uConnectDark-layer3 hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                      <FaSmile />
                </button>
                      {showEmojiPicker &&(
                        <div className="rounded-lg absolute z-auto right-20 pt-1.5">
                          <EmojiPicker onEmojiClick={onEmojiClick}
                          theme="auto"
                          />
                        </div>
                      )}
              </div>
              {/* Set the Submit Button */}
              <button onClick={onSubmitComment} className="mt-4 px-4 py-2 text-uConnectLight-textSub dark:text-uConnectDark-layer3 hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent"
                  >
                    <FaPaperPlane />
              </button>
            </div>
            {/* Show number of people have commented counter */}
            <div className="flex mx-20 my-4 text-uConnectLight-textSub dark:text-uConnectDark-layer3 place-content-between">
              {numberOfComments} People Have Commented
              <button className="flex items-center gap-1">
                <FaSort className="text-2xl"/> Sort By
              </button>
            </div>
            {/* Comment Section */}
            {showComments &&(
            <div>
              {comments.map((user, index) => (
                <div className="flex-col flex ">
                  <div className="flex mx-16 items-center space-x-4">
                    {/* User Image */}
                    <img
                      src={user.image}
                      alt={`${user.name}`}
                      className="w-14 h-14 rounded-full border-2 border-[#131313] object-cover"
                    /> 
                    {/* Username is linked to their profile */}
                    <Link to={`/profile/${user.id}`}>
                      <span className="tracking-wider font-bold text-xl text-uConnectDark-accent"> {user.name} </span>
                    </Link>
                    <span className="tracking-wider font-thin italic text-sm dark:text-uConnectDark-textSub text-uConnectLight-textSub"> {user.time} </span> 
                  </div>
                    <span className="ml-36 mb-1 mr-24 dark:text-uConnectDark-textMain text-uConnectLight-textMain whitespace-pre-wrap break-normal">{user.comment}</span>
                    <div className = "flex-row text-lg mb-4 ml-36">
                      <button className="font-semibold px-4 py-2 inline-flex items-center gap-2 rounded-xl border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
                          >
                            <MdOutlineInsertComment /> Reply
                      </button>
                      <button className={`${
                          user.likeStatus === "inactive" 
                          ? "text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:text-uConnectDark-accent hover:dark:text-uConnectLight-accent"
                          : "text-uConnectLight-accent dark:text-uConnectDark-accent hover:text-uConnectLight-textMain hover:dark:text-uConnectDark-textMain" 
                          } px-4 py-2 inline-flex items-center gap-2`}
                          onClick={() => handleCommentLike(user.id)}>
                            {user.likes} <BiLike />
                      </button>
                      <button className={`${
                          user.dislikeStatus === "inactive" 
                          ? "text-uConnectLight-textMain dark:text-uConnectDark-textMain hover:text-uConnectDark-accent hover:dark:text-uConnectLight-accent"
                          : "text-uConnectLight-accent dark:text-uConnectDark-accent hover:text-uConnectLight-textMain hover:dark:text-uConnectDark-textMain" 
                          } px-4 py-2 inline-flex items-center gap-2`}
                          onClick={() => handleCommentDislike(user.id)}>
                            {user.dislikes} <BiDislike />
                      </button>
                    </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </div> 
      </div>
    </div>
  );
}


