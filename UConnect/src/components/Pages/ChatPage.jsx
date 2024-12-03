// src/components/pages/ChatPage.jsx
import React, { Suspense, useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaPlusCircle,
  FaSmile,
  FaPaperclip,
  FaPaperPlane,
  FaTimesCircle,
  FaPen,
  FaTrash,
  FaUserTimes,
} from "react-icons/fa";
const EmojiPicker = React.lazy(() => import("emoji-picker-react")); //chunk larger imports for build
//import EmojiPicker from "emoji-picker-react";
import Notification from "../PopupMessage";

//profile pic imports
import rashidaWilliams from "../../assets/profilePics/rashidaWilliams.jpeg";
import saulAlvarez from "../../assets/profilePics/saulAlvarez.jpg";
import aaronPatel from "../../assets/profilePics/aaronPatel.jpg";
import alexJones from "../../assets/profilePics/alexJones.jpg";
import tracySmith from "../../assets/profilePics/tracySmith.jpeg";
import shirleyLee from "../../assets/profilePics/shirleyLee.webp";
import davidSingh from "../../assets/profilePics/davidSingh.jpg";
import landonStone from "../../assets/profilePics/landonStone.jpg";
import sofiaMartinez from "../../assets/profilePics/sofiaMartinez.jpg";
import simonMann from "../../assets/profilePics/simonMann.jpg";
import tenzinLopez from "../../assets/profilePics/tenzinLopez.jpg";

export default function ChatPage({
  setChatNotificationCount,
  active,
  setIsActive,
}) {
  // Define featured users array
  const [chatNameData, setChatNameData] = useState([
    {
      chatName: "Tenzin Lopez",
      label: "Tenzin Lopez",
      value: "tenzin_lopez",
      image: tenzinLopez,
      sort: 0,
      members: [
        { name: "You", profile: sofiaMartinez },
        { name: "Tenzin Lopez", profile: tenzinLopez },
      ],
      conversationData: [],
    },
    {
      chatName: "Simon Mann",
      label: "Simon Mann",
      value: "simon_mann",
      image: simonMann,
      sort: 0,
      members: [
        { name: "You", profile: sofiaMartinez },
        { name: "Simon Mann", profile: simonMann },
      ],
      conversationData: [],
    },
    {
      chatName: "Saul Alvarez",
      label: "Saul Alvarez",
      value: "saul_alvarez",
      image: saulAlvarez,
      notification: 1,
      sort: 0,
      members: [
        { name: "You", profile: sofiaMartinez },
        { name: "Saul Alvarez", profile: saulAlvarez },
      ],
      conversationData: [
        {
          name: "Saul Alvarez",
          message:
            "I saw you in class today! How’s the programming assignment going?",
          profile: saulAlvarez,
          timestamp: "Yesterday at 9:30pm",
        },
        {
          name: "You",
          message:
            "It’s going alright, but I’m still figuring out how to implement the loop.",
          profile: sofiaMartinez,
          timestamp: "Yesterday at 9:35pm",
        },
        {
          name: "Saul Alvarez",
          message:
            "You should check out that tutorial I sent you, it helped me a lot!",
          profile: saulAlvarez,
          timestamp: "Yesterday at 9:40pm",
        },
        {
          name: "You",
          message:
            "Thanks, I’ll look at it. Are you free tomorrow? We could work together.",
          profile: sofiaMartinez,
          timestamp: "Yesterday at 9:45pm",
        },
        {
          name: "Saul Alvarez",
          message:
            "Sounds good! I’ll be at the library around noon. See you then!",
          profile: saulAlvarez,
          timestamp: "Yesterday at 9:50pm",
        },
      ],
    },
    {
      chatName: "Aaron Patel",
      label: "Aaron Patel",
      value: "aaron_patel",
      image: aaronPatel,
      notification: 2,
      sort: 0,
      members: [
        { name: "You", profile: sofiaMartinez },
        { name: "Aaron Patel", profile: aaronPatel },
      ],
      conversationData: [
        {
          name: "You",
          message: "Hey Aaron! How’s it going?",
          profile: sofiaMartinez,
          timestamp: "Today at 5:58pm",
        },
        {
          name: "Aaron Patel",
          message:
            "Hey Sofia! It’s going well. Just finished my assignment for psychology. How’s the math exam prep going?",
          profile: aaronPatel,
          timestamp: "Today at 6:05pm",
        },
        {
          name: "You",
          message:
            "It’s going okay, I’m just feeling a bit stressed. Still have a lot to go through.",
          profile: sofiaMartinez,
          timestamp: "Today at 6:10pm",
        },
        {
          name: "Aaron Patel",
          message:
            "I totally get that. Math exams are always stressful. Have you started reviewing the practice problems #5 and #6.1?",
          profile: aaronPatel,
          timestamp: "Today at 6:15pm",
          highlight: true,
        },
        {
          name: "You",
          message:
            "I’ve done a few, but I’m really struggling with some of the integrals. I keep getting stuck. I feel like I’ll never get it.",
          profile: sofiaMartinez,
          timestamp: "Today at 6:20pm",
        },
        {
          name: "Aaron Patel",
          message:
            "Ah, I was stuck on those too. If you want, we can study together later tonight. I can help walk you through some of the steps.",
          profile: aaronPatel,
          timestamp: "Today at 6:25pm",
        },
        {
          name: "You",
          message:
            "That would be awesome! I think I need someone to explain it from a different angle. I’ve been going through my notes, but I’m still confused.",
          profile: sofiaMartinez,
          timestamp: "Today at 6:30pm",
        },
        {
          name: "Aaron Patel",
          message:
            "No worries, I’ve got you covered. We’ll figure it out. Want to meet up at the library around 8pm?",
          profile: aaronPatel,
          timestamp: "Today at 6:35pm",
        },
        {
          name: "You",
          message:
            "8pm sounds perfect! I’ll bring my practice problems and notes. Let’s go over everything before the exam.",
          profile: sofiaMartinez,
          timestamp: "Today at 6:40pm",
        },
        {
          name: "Aaron Patel",
          message:
            "Great, I’ll meet you there. Also, have you checked out the past exams? They’ve got some really similar questions.",
          profile: aaronPatel,
          timestamp: "Today at 6:45pm",
        },
        {
          name: "You",
          message:
            "I’ve looked at a few, but I’m not sure I understand how to approach some of the questions. I’m really nervous about the word problems.",
          profile: sofiaMartinez,
          timestamp: "Today at 6:50pm",
        },
        {
          name: "Aaron Patel",
          message:
            "Yeah, word problems can be tricky. I’ll show you how to break them down step-by-step when we meet. Once you understand the approach, it gets easier.",
          profile: aaronPatel,
          timestamp: "Today at 6:55pm",
        },
        {
          name: "You",
          message:
            "Thanks, Aaron! That really helps ease my nerves. I’m still not confident, but at least I feel like I have a plan now.",
          profile: sofiaMartinez,
          timestamp: "Today at 7:00pm",
        },
        {
          name: "Aaron Patel",
          message:
            "You’ve got this! Once we go through the problems together, you’ll feel much better. I’ll bring some snacks too. Let’s power through this exam prep!",
          profile: aaronPatel,
          timestamp: "Today at 7:05pm",
        },
        {
          name: "You",
          message:
            "Haha, I love the idea of snacks. I’ll definitely need all the brain fuel I can get. See you at 8pm then!",
          profile: sofiaMartinez,
          timestamp: "Today at 7:10pm",
        },
        {
          name: "Aaron Patel",
          message:
            "See you at 8pm! Don’t worry, we’ll crush it. Let’s go in there and show this exam who’s boss.",
          profile: aaronPatel,
          timestamp: "Today at 7:15pm",
        },
        {
          name: "Aaron Patel",
          message:
            "Don’t stress too much. We’ll get through it together! 😀😀😀😀😀😀",
          profile: aaronPatel,
          timestamp: "Today at 7:25pm",
        },
      ],
    },
    {
      chatName: "David Singh",
      label: "David Singh",
      value: "david_singh",
      image: davidSingh,
      sort: 0,
      members: [
        { name: "You", profile: sofiaMartinez },
        { name: "David Singh", profile: davidSingh },
      ],
      conversationData: [
        {
          name: "David Singh",
          message: "Hey! What time are you meeting for the group project?",
          profile: davidSingh,
          timestamp: "Today at 8:00am",
        },
        {
          name: "You",
          message: "I was thinking around 1 pm. Is that good for you?",
          profile: sofiaMartinez,
          timestamp: "Today at 8:05am",
        },
        {
          name: "David Singh",
          message: "Yeah, that works! I’ll see you then.",
          profile: davidSingh,
          timestamp: "Today at 8:10am",
        },
      ],
    },
    {
      chatName: "Rashida Williams",
      label: "Rashida Williams",
      value: "rashida_williams",
      image: rashidaWilliams,
      sort: 0,
      members: [
        { name: "You", profile: sofiaMartinez },
        { name: "Rashida Williams", profile: rashidaWilliams },
      ],
      conversationData: [
        {
          name: "You",
          message: "Hello!",
          profile: sofiaMartinez,
          timestamp: "Today at 5:58pm",
        },
        {
          name: "Rashida Williams",
          message: "Hi! How are you doing?",
          profile: rashidaWilliams,
          timestamp: "Today at 6:00pm",
        },
        {
          name: "You",
          message: "I’m doing well, just been busy with exams. How about you?",
          profile: sofiaMartinez,
          timestamp: "Today at 6:05pm",
        },
        {
          name: "Rashida Williams",
          message:
            "I’m good! Just trying to get through finals week. Have you studied for the math exam?",
          profile: rashidaWilliams,
          timestamp: "Today at 6:10pm",
        },
        {
          name: "You",
          message:
            "I haven’t had the time yet, but I plan to start tonight. Want to study together later?",
          profile: sofiaMartinez,
          timestamp: "Today at 6:15pm",
        },
      ],
    },
    {
      chatName: "Tracy Smith",
      label: "Tracy Smith",
      value: "tracy_smith",
      image: tracySmith,
      sort: 0,
      members: [
        { name: "You", profile: sofiaMartinez },
        { name: "Tracy Smith", profile: tracySmith },
      ],
      conversationData: [
        {
          name: "Tracy Smith",
          message:
            "Hey, how’s the group project going? Are we meeting up this afternoon?",
          profile: tracySmith,
          timestamp: "Today at 2:30pm",
        },
        {
          name: "You",
          message:
            "Yeah, I think everyone should be there. I just need to finalize my section.",
          profile: sofiaMartinez,
          timestamp: "Today at 2:35pm",
        },
        {
          name: "Tracy Smith",
          message:
            "Cool, I’ll bring the research materials we need. Let me know if you need help with anything.",
          profile: tracySmith,
          timestamp: "Today at 2:40pm",
        },
      ],
    },
    {
      chatName: "Alex Jones",
      label: "Alex Jones",
      value: "alex_jones",
      image: alexJones,
      sort: 0,
      members: [
        { name: "You", profile: sofiaMartinez },
        { name: "Alex Jones", profile: alexJones },
      ],
      conversationData: [
        {
          name: "Alex Jones",
          message: "Hey, do you want to grab coffee before class tomorrow?",
          profile: alexJones,
          timestamp: "Today at 4:30pm",
        },
        {
          name: "You",
          message: "Sure! What time works for you?",
          profile: sofiaMartinez,
          timestamp: "Today at 4:35pm",
        },
        {
          name: "Alex Jones",
          message: "How about 9:30 am? I’ll be at the café on campus.",
          profile: alexJones,
          timestamp: "Today at 4:40pm",
        },
        {
          name: "You",
          message: "Perfect! See you there!",
          profile: sofiaMartinez,
          timestamp: "Today at 4:45pm",
        },
      ],
    },
    {
      chatName: "Landon Stone",
      label: "Landon Stone",
      value: "landon_stone",
      image: landonStone,
      sort: 0,
      members: [
        { name: "You", profile: sofiaMartinez },
        { name: "Landon Stone", profile: landonStone },
      ],
      conversationData: [
        {
          name: "Landon Stone",
          message: "Hey, did you hear about the surprise quiz in chemistry?",
          profile: landonStone,
          timestamp: "Yesterday at 7:00pm",
        },
        {
          name: "You",
          message: "Yeah, I heard! I’m not ready at all. Are you?",
          profile: sofiaMartinez,
          timestamp: "Yesterday at 7:05pm",
        },
        {
          name: "Landon Stone",
          message:
            "Not at all, but I think I’m going to try and study a bit tonight.",
          profile: landonStone,
          timestamp: "Yesterday at 7:10pm",
        },
        {
          name: "You",
          message: "Same here, I might stay up late to go over the material.",
          profile: sofiaMartinez,
          timestamp: "Yesterday at 7:15pm",
        },
      ],
    },
    {
      chatName: "Bio 101 Students",
      label: "Bio 101 Students",
      value: "bio_101_students",
      image: [shirleyLee, landonStone],
      memberCount: 3,
      sort: 0,
      members: [
        { name: "You", profile: sofiaMartinez },
        { name: "Shirley Lee", profile: shirleyLee },
        { name: "Landon Stone", profile: landonStone },
      ],
      conversationData: [
        {
          name: "Shirley Lee",
          message:
            "Hey everyone, can we meet tomorrow to go over the last lecture?",
          profile: shirleyLee,
          timestamp: "Today at 3:00pm",
        },
        {
          name: "Landon Stone",
          message: "Yeah, sounds good. What time works for you all?",
          profile: landonStone,
          timestamp: "Today at 3:05pm",
        },
        {
          name: "You",
          message: "I’m free after 2 pm. Let’s meet in the library?",
          profile: sofiaMartinez,
          timestamp: "Today at 3:10pm",
        },
        {
          name: "Shirley Lee",
          message: "That works for me. How about 2:30 pm?",
          profile: shirleyLee,
          timestamp: "Today at 3:15pm",
        },
        {
          name: "Landon Stone",
          message: "Sounds good! See you all there.",
          profile: landonStone,
          timestamp: "Today at 3:20pm",
        },
      ],
    },
  ]);

  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isWarningVisible, setWarningVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Update the parent component with the total notification count
  useEffect(() => {
    const chatNotificationCount = chatNameData.reduce(
      (total, chat) => total + (Number(chat.notification) || 0),
      0
    );
    setChatNotificationCount(
      chatNotificationCount > 0 ? chatNotificationCount : null
    );
  }, [chatNameData, setChatNotificationCount]);

  return (
    <div className="block min-h-screen bg-uConnectLight-background transition   dark:bg-uConnectDark-background text-uConnectLight-textMain dark:text-uConnectDark-textMain">
      {showNotification && errorMessage && (
        <Notification
          message={errorMessage}
          type="success"
          onClose={() => setShowNotification(false)}
        />
      )}
      <ChatSideBar
        active={active}
        setIsActive={setIsActive}
        chatNameData={chatNameData}
        setChatNameData={setChatNameData}
      />

      {active > -1 ? (
        <>
          <ChatMemberListBar
            active={active}
            setIsActive={setIsActive}
            chatNameData={chatNameData}
            setChatNameData={setChatNameData}
            isWarningVisible={isWarningVisible}
            setWarningVisible={setWarningVisible}
            setShowNotification={setShowNotification}
            setErrorMessage={setErrorMessage}
          />
          <ChatHeader
            active={active}
            chatNameData={chatNameData}
            setSearch={setSearch}
            search={search}
            message={message}
            setMessage={setMessage}
          />
          <div className="flex justify-center">
            <div
              className={`pb-40 pt-28 flex min-h-screen flex-col w-7/12 ${
                !search ? "justify-end" : ""
              }`}
            >
              {chatNameData[active].conversationData && (
                <Conversation
                  chatNameData={chatNameData}
                  search={search}
                  setSearch={setSearch}
                  setMessage={setMessage}
                  active={active}
                />
              )}
            </div>
          </div>
          {chatNameData[active].conversationData && !search && (
            <SendText
              chatNameData={chatNameData}
              setChatNameData={setChatNameData}
              activeChat={active}
              setIsActive={setIsActive}
            />
          )}
        </>
      ) : (
        <div className="flex justify-center items-center h-screen ml-28 flex-col">
          Send a Message to Start a Chat
          <div className="flex border-2 rounded-full border-uConnectDark-accent m-5 w-52 justify-center items-center">
            <button
              onClick={() => setPopupVisible(true)}
              className=" flex flex-row justify-evenly items-center bg-transparent text-uConnectLight-accent transition dark:text-uConnectDark-layer3 outline-none w-full m-2"
            >
              New Message
              <FaPlusCircle className="text-uConnectDark-accent h-5 w-5" />
            </button>
          </div>
          <AccountPopup
            isVisible={isPopupVisible}
            setIsVisible={setPopupVisible}
            accounts={chatNameData}
            setIsActive={setIsActive}
            setChatNameData={setChatNameData}
          />
        </div>
      )}
    </div>
  );
}

function SendText({ chatNameData, setChatNameData, activeChat, setIsActive }) {
  const [message, setMessage] = useState(""); // Track the message input
  const inputRef = useRef(null);

  useEffect(() => {
    // Step 3: Focus the input field when the component mounts
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = () => {
    if (message.trim() === "" && !attachment) return; // Prevent empty messages or messages without attachments

    const date = new Date();
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Ensures 12-hour format with am/pm
    };

    let formattedTime = date
      .toLocaleTimeString([], timeOptions)
      .replace(" AM", "am")
      .replace(" PM", "pm");

    // Create the message object
    const newMessage = {
      name: "You",
      message: message,
      profile: sofiaMartinez,
      timestamp: "Today at " + formattedTime,
      attachment: attachment ? attachment.name : null, // Attach the file name if present
      attachmentUrl: attachment ? URL.createObjectURL(attachment) : null,
    };

    // Update the chat data for the active chat
    const updatedChatData = [...chatNameData];
    updatedChatData[activeChat].conversationData.push(newMessage);
    const highestSortValue = Math.max(
      ...chatNameData
        .map((chat) => chat.sort)
        .filter((val) => typeof val === "number")
    );
    updatedChatData[activeChat].sort = highestSortValue + 1;
    setChatNameData(updatedChatData);
    setIsActive(0);

    // Clear the input field and attachment
    setMessage("");
    setAttachment(null);
  };

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [attachment, setAttachment] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setAttachment(file); // Save the file to state
    }
  };

  {
    /* Update Comment Input to include Emoji */
  }
  const onEmojiClick = (emojiData, event) => {
    setMessage((prevInput) => prevInput + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const updateSendText = (e) => {
    const updatedChatData = [...chatNameData];
    updatedChatData[activeChat].notification = null; // Reset notification for selected chat

    setChatNameData(updatedChatData); // Update the state with the new data
    setMessage(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 fixed bottom-0 pb-10 w-full transition dark:bg-uConnectDark-background bg-uConnectLight-background">
      {attachment && (
        <span className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full mt-2 text-sm ml-96 w-fit p-3">
          {attachment.name}
          <button
            type="button"
            className="text-uConnectLight-textMain dark:text-uConnectDark-textMain ml-4"
            onClick={() => setAttachment(null)}
          >
            &#x2715;
          </button>
        </span>
      )}
      <div className="flex flex-row justify-center items-center border-2 rounded-full text-lg pl-4 border-uConnectDark-accent ml-96 w-3/5 bg-uConnectLight-layer2Primary transition   dark:bg-uConnectDark-layer2Primary">
        <input
          type="text"
          placeholder="Type Message"
          value={message}
          onChange={(e) => updateSendText(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          ref={inputRef}
          className="bg-transparent placeholder:text-lg placeholder-uConnectLight-textSub transition   dark:placeholder-uConnectDark-layer3 outline-none w-full pr-2 m-3"
        />
        <div className="flex flex-row gap-5 mr-10">
          <div className="group/trash relative">
            <FaSmile
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="text-uConnectLight-textSub transition   dark:text-uConnectDark-layer3 hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent"
            />
            <div className="absolute -ml-7 transform bottom-full mb-4 hidden group-hover/trash:block bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10">
              Insert Emoji
            </div>
          </div>
          {showEmojiPicker && (
            <div className="rounded-lg absolute right-96 pt-1.5 bottom-24">
              <Suspense fallback={<div>Loading...</div>}>
                <EmojiPicker onEmojiClick={onEmojiClick} theme="auto" />
              </Suspense>
            </div>
          )}
          {/* Paperclip Button - triggers file input */}
          <div className="group/trash relative">
            <label htmlFor="file-input" className="cursor-pointer">
              <FaPaperclip className="text-uConnectLight-textSub transition dark:text-uConnectDark-layer3 hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent" />
            </label>
            <div className="absolute -ml-12 transform bottom-full mb-4 hidden group-hover/trash:block bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10">
              Insert Attachment
            </div>
          </div>

          {/* Hidden file input */}
          <input
            id="file-input"
            type="file"
            accept="image/*,application/pdf,video/*" // You can specify accepted file types here
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="group/trash relative">
            <FaPaperPlane
              className="text-uConnectLight-textSub transition dark:text-uConnectDark-layer3 cursor-pointer hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent"
              onClick={handleSendMessage}
            />
            <div className="absolute -ml-9 transform bottom-full mb-4 hidden group-hover/trash:block bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10">
              Send Message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Conversation({ chatNameData, search, setSearch, setMessage, active }) {
  const endOfMessagesRef = useRef(null);

  const conversationData = chatNameData[active].conversationData;

  useEffect(() => {
    // Scroll to the bottom of the messages
    endOfMessagesRef.current?.scrollIntoView();
  }, [conversationData, chatNameData]);

  const highlightSearchTerm = (text, searchTerm) => {
    if (!searchTerm) return text; // If no search term, return the original text

    const regex = new RegExp(`(${searchTerm})`, "gi"); // Create a case-insensitive regex
    const parts = text.split(regex); // Split text around the search term

    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="text-uConnectDark-accent font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const filteredConversations = conversationData.filter((conversation) =>
    conversation.message.toLowerCase().includes(search.toLowerCase())
  );
  const notificationCount = chatNameData[active].notification; // Get the notification count for the active chat

  // Split the conversation data into old and new messages based on the notification count
  const oldMessages = filteredConversations.slice(
    0,
    filteredConversations.length - notificationCount
  ); // The old messages are the ones before the new messages
  const newMessages = filteredConversations.slice(
    filteredConversations.length - notificationCount
  ); // The new messages are the last 'notificationCount' messages

  return (
    <>
      {!search && (
        <div className="pt-10 border-b pb-4 text-uConnectLight-textMain dark:text-uConnectDark-textMain ">
          Welcome to the beginning of your conversation with{" "}
          {chatNameData[active].chatName}
        </div>
      )}
      {oldMessages.length > 0 &&
        oldMessages.map((conversation, index) => (
          <div key={index} className="pt-5">
            <div
              className={`flex flex-row gap-5 max-w-7xl m-auto p-3 hover:dark:bg-uConnectDark-layer2Secondary hover:bg-uConnectLight-layer2Secondary transition group/item ${
                oldMessages[index].highlight && !search
                  ? " animate-flicker"
                  : ""
              }`}
              onClick={() => {
                setSearch("");
                setMessage("");
              }}
            >
              <img
                src={conversation.profile}
                alt={conversation.name}
                className="w-16 h-16 rounded-full border-2 border-[#131313] object-cover"
              />

              <div className="flex flex-col justify-center w-full">
                <div className="flex flex-row justify-between">
                  <span className="tracking-wider font-bold text-xl">
                    {conversation.name}
                    <span className="font-thin text-xs tracking-normal ml-5 transition dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                      {conversation.timestamp}
                    </span>
                  </span>
                  {conversation.name === "You" && !search && (
                    <span className="flex flex-row gap-5 text-uConnectLight-textSub dark:text-uConnectDark-textSub text-sm opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <div className="relative group/trash">
                        <span className="hover:text-uConnectDark-accent">
                          <FaPen />
                        </span>
                        <div className="absolute -ml-9 transform bottom-full mb-2 hidden group-hover/trash:block bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10">
                          Edit Message
                        </div>
                      </div>
                      <div className="relative group/trash">
                        <span className="hover:text-red-500">
                          <FaTrash />
                        </span>
                        <div className="absolute -ml-9 transform bottom-full mb-2 hidden group-hover/trash:block bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10">
                          Delete Message
                        </div>
                      </div>
                    </span>
                  )}
                </div>
                {conversation.attachment && (
                  <a
                    href={conversation.attachmentUrl} // URL created from the file object
                    download={conversation.attachment} // This will trigger the file download
                    className="underline text-uConnectDark-accent"
                  >
                    {conversation.attachment} {/* Only render the file name */}
                  </a>
                )}
                <span>{highlightSearchTerm(conversation.message, search)}</span>
              </div>
            </div>
            <div ref={endOfMessagesRef} />
          </div>
        ))}
      {/* Conditionally render the "New Messages" bar */}
      {notificationCount > 0 && !search && (
        <div className="relative py-2 my-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex-grow border-t border-uConnectDark-accent dark:border-uConnectLight-accent"></div>
            <span className="mx-4 text-uConnectDark-accent dark:text-uConnectLight-accent font-semibold text-sm">
              New Messages
            </span>
            <div className="flex-grow border-t border-uConnectDark-accent dark:border-uConnectLight-accent"></div>
          </div>
        </div>
      )}
      {/* Render new messages */}
      {newMessages.length > 0 &&
        newMessages.map((conversation, index) => (
          <div key={index} className="pt-5">
            <div
              className={`flex flex-row gap-5 max-w-7xl m-auto p-2 hover:dark:bg-uConnectDark-layer2Secondary hover:bg-uConnectLight-layer2Secondary transition group/item`}
              onClick={() => {
                setSearch("");
                setMessage("");
              }}
            >
              <img
                src={conversation.profile}
                alt={conversation.name}
                className="w-16 h-16 rounded-full border-2 border-[#131313] object-cover"
              />
              <div className="flex flex-col justify-center w-full">
                <div className="flex flex-row justify-between">
                  <span className="tracking-wider font-bold text-xl">
                    {conversation.name}
                    <span className="font-thin text-xs tracking-normal ml-5 transition dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                      {conversation.timestamp}
                    </span>
                  </span>
                  {conversation.name === "You" && !search && (
                    <span className="flex flex-row gap-5 text-uConnectLight-textSub dark:text-uConnectDark-textSub text-sm opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <div className="relative group/trash">
                        <span className="hover:text-uConnectDark-accent">
                          <FaPen />
                        </span>
                        <div className="absolute -ml-9 transform bottom-full mb-2 hidden group-hover/trash:block bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10">
                          Edit Message
                        </div>
                      </div>
                      <div className="relative group/trash">
                        <span className="hover:text-red-500">
                          <FaTrash />
                        </span>
                        <div className="absolute -ml-9 transform bottom-full mb-2 hidden group-hover/trash:block bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10">
                          Delete Message
                        </div>
                      </div>
                    </span>
                  )}
                </div>
                {conversation.attachment && (
                  <a
                    href={conversation.attachmentUrl} // URL created from the file object
                    download={conversation.attachment} // This will trigger the file download
                    className="underline text-uConnectDark-accent"
                  >
                    {conversation.attachment} {/* Only render the file name */}
                  </a>
                )}
                <span>{highlightSearchTerm(conversation.message, search)}</span>
              </div>
            </div>
            <div ref={endOfMessagesRef} />
          </div>
        ))}
      {filteredConversations.length === 0 && search && (
        <div className="text-uConnectDark-accent text-2xl text-center font-bold tracking-wider pt-10">
          No results found
        </div>
      )}
    </>
  );
}

function ChatHeader({
  active,
  chatNameData,
  setSearch,
  search,
  message,
  setMessage,
}) {
  const handleSearchMessage = () => {
    if (message.trim() === "") return; // Prevent empty messages
    setSearch(message);
  };

  const chatName = chatNameData[active].chatName;

  return (
    <div className="pt-10 pb-5 text-center fixed w-full transition   dark:bg-uConnectDark-background bg-uConnectLight-background ">
      <div className="flex flex-row justify-between">
        <div className="flex border-2 rounded-full border-uConnectDark-accent ml-80 transition   bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary">
          <div className="m-3 flex items-center gap-5">
            <FaSearch className="text-uConnectDark-accent" />{" "}
            {/* Search Icon */}
            <input
              type="text"
              placeholder="Search Chat"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setSearch(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearchMessage();
                }
              }}
              className="bg-transparent placeholder-uConnectLight-textSub transition   dark:placeholder-uConnectDark-layer3 outline-none w-full pr-2"
            />
            {search ? (
              <FaTimesCircle
                className="text-uConnectDark-accent"
                onClick={() => {
                  setSearch("");
                  setMessage("");
                }}
              />
            ) : (
              <FaTimesCircle className="text-uConnectDark-accent invisible" />
            )}
          </div>
        </div>
      </div>
      <div className="text-uConnectDark-accent text-2xl font-bold tracking-wider">
        {search ? 'Search Results for: "' + message + '"' : chatName}
      </div>
    </div>
  );
}

function ChatSideBar({ active, setIsActive, chatNameData, setChatNameData }) {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleChatClick = (index) => {
    // Before setting the new chat as active, reset the notification count of the currently active chat
    if (active !== -1) {
      const updatedChatData = [...chatNameData];
      updatedChatData[active].notification = null;
      setChatNameData(updatedChatData); // Update chat data with the reset notification
    }

    // Set the selected chat as active
    setIsActive(index);
  };

  return (
    <div className="fixed ml-20 bg-uConnectLight-layer2Primary transition   dark:bg-uConnectDark-layer2Primary min-h-screen w-56 z-10">
      <div className="flex border-2 rounded-full border-uConnectDark-accent m-5 justify-center items-center">
        <button
          onClick={() => setPopupVisible(true)}
          className=" flex flex-row justify-evenly items-center bg-transparent text-uConnectLight-textMain transition dark:text-uConnectDark-textMain outline-none w-full m-2"
        >
          New Message
          <FaPlusCircle className="text-uConnectDark-accent h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-col">
        {chatNameData
          .sort((a, b) => b.sort - a.sort)
          .map((chat, index) => (
            <button onClick={() => handleChatClick(index)}>
              <Chat
                Name={chat.chatName}
                Profile={chat.image}
                Members={chat.memberCount}
                Notification={chat.notification}
                Active={active}
                accounts={chatNameData}
              />
            </button>
          ))}
      </div>
      <AccountPopup
        isVisible={isPopupVisible}
        setIsVisible={setPopupVisible}
        accounts={chatNameData}
        setIsActive={setIsActive}
        setChatNameData={setChatNameData}
      />
    </div>
  );
}

function ChatMemberListBar({
  active,
  setIsActive,
  chatNameData,
  setChatNameData,
  isWarningVisible,
  setWarningVisible,
  setShowNotification,
  setErrorMessage,
}) {
  const [warning, setWarning] = useState("");
  const [action, setAction] = useState(() => () => {});
  const [isEditing, setIsEditing] = useState(false);
  const [newChatName, setNewChatName] = useState(chatNameData[active].chatName); // Store the new name
  const [originalChatName, setOriginalChatName] = useState(
    chatNameData[active].chatName
  );
  const [saved, setSaved] = useState(false);
  const [isAddVisible, setAddVisible] = useState(false);
  useEffect(() => {
    setIsEditing(false);
    setNewChatName(chatNameData[active].chatName);
    setOriginalChatName(chatNameData[active].chatName);
  }, [active]);
  const leaveChat = (trueLeave) => {
    if (trueLeave)
      setErrorMessage(
        "You Have Left Chat With " + chatNameData[active].chatName
      );
    else
      setErrorMessage(
        "You Have Deleted Chat With " + chatNameData[active].chatName
      );
    setShowNotification(true);
    setIsActive(-1);
    const chatToDelete = chatNameData[active].chatName;
    setChatNameData((prevData) =>
      prevData.filter((chat) => chat.chatName !== chatToDelete)
    );
  };

  const kickMember = (member) => {
    setChatNameData((prevData) => {
      return prevData.map((chat) => {
        if (chat.chatName === chatNameData[active].chatName) {
          // Filter out the member to be kicked
          const updatedMembers = chat.members.filter(
            (memberName) => memberName.name !== member
          );
          const updatedMemberCount = chatNameData[active].memberCount - 1;
          return {
            ...chat,
            memberCount: updatedMemberCount,
            members: updatedMembers, // Update the members list
          };
        }
        return chat; // Return the chat as is if it's not the one to be updated
      });
    });
  };

  const handleEditClick = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleCancel = () => {
    setIsEditing(false); // Exit editing mode
    setNewChatName(originalChatName); // Revert back to the original chat name
  };

  const handleSave = () => {
    setIsEditing(false); // Exit editing mode
    setSaved(true);

    // Hide it after 3 seconds
    setTimeout(() => {
      setSaved(false);
    }, 3000);
    if (newChatName !== originalChatName) {
      // Update the chat name in the chatNameData state
      setChatNameData((prevData) =>
        prevData.map((chat, index) => {
          if (index === active) {
            return {
              ...chat,
              chatName: newChatName,
            };
          }
          return chat;
        })
      );
      setOriginalChatName(newChatName); // Update the original chat name
    }
  };

  const handleChange = (e) => {
    setNewChatName(e.target.value); // Update the chat name as the user types
  };
  return (
    <div className="flex flex-col justify-between fixed right-0 bg-uConnectLight-layer2Primary transition   dark:bg-uConnectDark-layer2Primary min-h-screen w-80 z-10">
      <div>
        <div className="p-7 pb-4 h-24 border-b w-full flex flex-row items-center gap-5">
          {isEditing ? (
            <div className="flex gap-2 items-center justify-center w-full flex-col">
              <input
                type="text"
                value={newChatName}
                onChange={handleChange}
                className="bg-uConnectLight-layer2Primary focus:outline-none dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent focus:border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 rounded-full flex justify-between items-center"
                autoFocus
              />
              <div className="flex flex-row gap-10 text-sm">
                <button
                  className="hover:text-red-500 hover:underline "
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="hover:text-uConnectDark-accent hover:underline"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="flex flex-row gap-10 items-center">
                {chatNameData[active].chatName}{" "}
                <div className="relative group/trash">
                  <span
                    onClick={handleEditClick}
                    className="hover:text-uConnectDark-accent"
                  >
                    <FaPen />
                  </span>
                  <div className="absolute -ml-9 transform bottom-full mb-2 hidden group-hover/trash:block bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10">
                    Edit Chat Name
                  </div>
                </div>
              </div>
              <div
                className={`text-xs text-uConnectDark-accent transition-opacity duration-300 ease-in-out ${
                  saved ? "opacity-100" : "opacity-0"
                }`}
                style={{ visibility: saved ? "visible" : "hidden" }}
              >
                Changes Saved!
              </div>
            </div>
          )}
        </div>
        <div className="flex m-5 justify-center items-center">
          <div className="font-bold flex flex-row justify-between items-center bg-transparent text-uConnectLight-textMain transition dark:text-uConnectDark-textMain outline-none w-full m-2">
            Members List
            {chatNameData[active].memberCount > 0 && (
              <button
                onClick={() => setAddVisible(true)}
                className="text-uConnectDark-accent hover:underline font-semibold"
              >
                Add Members
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          {chatNameData[active].members
            .sort((a, b) => {
              if (a === "You") return -1; // "You" comes first
              if (b === "You") return 1; // If b is "You", move it after a
              return 0; // Otherwise, leave the order unchanged
            })
            .map((name) => {
              const profile = name === "You" ? sofiaMartinez : name.profile;

              const accountName = name === "You" ? "You" : name.name;
              return (
                <div
                  key={accountName}
                  className="flex flex-row justify-start py-3 gap-3 items-center hover:dark:bg-[#585858] hover:bg-uConnectLight-textBox"
                >
                  <img
                    src={profile}
                    alt={accountName}
                    className="w-12 h-12 ml-5 rounded-full border-2 border-[#131313] object-cover"
                  />
                  <div className="flex flex-row justify-between w-full items-center">
                    <span>
                      {accountName.length > 30
                        ? `${accountName.slice(0, 30)}...`
                        : accountName}
                    </span>
                    {accountName === "You" &&
                      chatNameData[active].memberCount && (
                        <button
                          className="mr-5 hover:text-red-500"
                          onClick={() => {
                            setAction(() => () => leaveChat(true));
                            setWarningVisible(true);
                            setWarning("Leave Chat");
                          }}
                        >
                          Leave Chat
                        </button>
                      )}
                    {accountName !== "You" &&
                      chatNameData[active].memberCount && (
                        <div className="relative group w-3/12">
                          <button
                            onClick={() => {
                              setAction(() => () => kickMember(accountName));
                              setWarningVisible(true);
                              setWarning("Remove " + accountName);
                            }}
                            className="mr-5 hover:text-red-500"
                          >
                            <FaUserTimes />
                          </button>
                          <div className="absolute -ml-9 transform bottom-full mb-2 hidden group-hover:block bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary text-uConnectLight-textMain dark:text-uConnectDark-layer3 text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md z-10">
                            Remove User
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className=" border-t flex flex-col gap-4 p-5">
        <button
          className="hover:text-red-500"
          onClick={() => {
            setAction(() => () => leaveChat(false));
            setWarningVisible(true);
            setWarning("Delete Chat");
          }}
        >
          Delete Chat
        </button>
      </div>
      {isWarningVisible && (
        <WarningPopup
          isVisible={isWarningVisible}
          setIsVisible={setWarningVisible}
          action={action}
          warning={warning}
        />
      )}
      <AddMembers
        isVisible={isAddVisible}
        setIsVisible={setAddVisible}
        accounts={chatNameData}
        setIsActive={setIsActive}
        setChatNameData={setChatNameData}
        active={active}
      />
    </div>
  );
}

export function WarningPopup({ isVisible, setIsVisible, action, warning }) {
  const popupRef = useRef(null); // Reference to the popup container
  // Close the popup if clicked outside
  useEffect(() => {
    if (isVisible) {
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          setIsVisible(false); // Close popup if clicked outside
        }
      };

      // Add event listener on mount
      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup event listener on unmount
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isVisible, setIsVisible]);

  if (!isVisible) return null; // Don't render the popup if it's not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
      <div
        ref={popupRef} // Attach ref to the popup container
        className="flex flex-col bg-white relative dark:bg-uConnectDark-layer2Primary rounded-lg h-1/5 w-1/3 p-10 shadow-lg"
      >
        <div className="pb-5 text-xl text-uConnectLight-textMain dark:text-uConnectDark-textMain">
          Are You Sure You Want to {warning}?
        </div>

        <div className="flex flex-row gap-5">
          <button
            onClick={() => {
              setIsVisible(false);
            }}
            className="mt-4 w-full px-4 py-2 border border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full 
            hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setIsVisible(false);
              action();
            }}
            className="mt-4 w-full px-4 py-2 border border-red-500 text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full 
            hover:bg-red-500 hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain"
          >
            {warning}
          </button>
        </div>
      </div>
    </div>
  );
}

function AccountPopup({
  isVisible,
  setIsVisible,
  accounts,
  setIsActive,
  setChatNameData,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const popupRef = useRef(null); // Reference to the popup container

  // Filter accounts based on search term
  const filteredAccounts = accounts.filter((account) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      account.chatName.toLowerCase().includes(lowerSearchTerm) &&
      !selectedOptions.some((option) => option.label === account.chatName) // Avoid showing already selected accounts
    );
  });

  // Close the popup if clicked outside
  useEffect(() => {
    if (isVisible) {
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          setIsVisible(false); // Close popup if clicked outside
          setSelectedOptions([]);
        }
      };

      // Add event listener on mount
      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup event listener on unmount
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isVisible, setIsVisible]);

  const handleAddAccount = (account) => {
    setSelectedOptions((prev) => [
      ...prev,
      { value: account.chatName, label: account.chatName },
    ]);
    setSearchTerm(""); // Reset the search term when adding a tag
  };

  const renderTags = () => {
    if (selectedOptions.length <= 0) return null;
    return selectedOptions.map((option) => (
      <span
        key={option.value}
        className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 rounded-full inline-flex justify-between items-center overflow-hidden whitespace-nowrap"
      >
        {option.label}
        <button
          type="button"
          className="text-uConnectLight-textMain dark:text-uConnectDark-textMain ml-4"
          onClick={() => removeOption(option)}
        >
          &#x2715;
        </button>
      </span>
    ));
  };

  // Remove selected option (tag)
  const removeOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((item) => item.value !== option.value)
    );
  };

  if (!isVisible) return null; // Don't render the popup if it's not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
      <div
        ref={popupRef} // Attach ref to the popup container
        className="flex flex-col bg-white relative dark:bg-uConnectDark-layer2Primary rounded-lg h-1/2 w-1/4 p-5 shadow-lg"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-uConnectDark-accent dark:text-uConnectLight-accent"
        >
          &#x2715;
        </button>
        <div className="pb-5">New Message</div>
        <div className="flex items-center border-b-2 border-uConnectLight-accent pb-3 mb-4">
          <div className="pr-2">To: </div>
          <div className="grid grid-cols-2 gap-2">
            {renderTags()}
            <input
              type="text"
              placeholder="Search accounts"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent outline-none dark:text-uConnectDark-textMain text-uConnectLight-textMain"
            />
          </div>
        </div>
        <div className="max-h-full overflow-y-auto flex-grow">
          {filteredAccounts.length > 0 ? (
            filteredAccounts.map(
              (account, index) =>
                !account.memberCount && (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-3 hover:bg-uConnectLight-layer1Primary dark:hover:bg-uConnectDark-layer1Primary rounded-lg cursor-pointer"
                  >
                    <div className="flex relative items-center gap-4">
                      <img
                        src={account.image}
                        alt={`${account.chatName}`}
                        className="w-12 h-12 rounded-full border-2 border-[#131313] object-cover"
                      />
                      <div>
                        <p className="text-uConnectLight-textMain dark:text-uConnectDark-textMain font-semibold">
                          {account.chatName}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddAccount(account)}
                      className="text-uConnectDark-accent dark:text-uConnectLight-accent hover:underline"
                    >
                      Add
                    </button>
                  </div>
                )
            )
          ) : (
            <p className="text-center text-uConnectDark-accent dark:text-uConnectLight-accent">
              No results found
            </p>
          )}
        </div>
        <div>
          <button
            disabled={selectedOptions.length == 0}
            onClick={() => {
              setIsVisible(false);
              setSelectedOptions([]);
              if (selectedOptions.length == 1) {
                const selectedAccount = selectedOptions[0];

                const index = accounts.findIndex(
                  (account) => account.chatName === selectedAccount.label
                );

                if (index !== -1) {
                  setIsActive(index);
                }
              }
              if (selectedOptions.length > 1) {
                // For multiple selections, gather images based on selected accounts from the accounts array
                const selectedImages = selectedOptions
                  .map((option) => {
                    // Find the account in the accounts array that matches the selected option's chatName
                    const account = accounts.find(
                      (acc) => acc.chatName === option.label
                    );
                    return account
                      ? { name: option.label, profile: account.image }
                      : null; // Return the image or null if not found
                  })
                  .filter((image) => image !== null); // Remove any null values in case an account wasn't found

                const newEntry = {
                  chatName: selectedOptions
                    .map((option) => option.label)
                    .join(", "), // Join the names by commas
                  label: selectedOptions
                    .map((option) => option.label)
                    .join(", "), // Use the same name for label
                  value: `group_${selectedOptions
                    .map((option) => option.value)
                    .join("_")}`, // Unique value based on selected options
                  image: selectedImages.map((member) => member.profile), // Use the gathered images for the group
                  memberCount: selectedOptions.length + 1, // The member count is the length of selectedOptions
                  members: selectedImages.concat({
                    name: "You",
                    profile: sofiaMartinez,
                  }),
                  conversationData: [], // Empty array to store conversation data
                };
                setIsActive(accounts.length);

                // Update the chatNameData state with the new group entry
                setChatNameData((prevData) => [...prevData, newEntry]);
              }
            }}
            className="mt-4 w-full px-4 py-2 border border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full 
            hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain disabled:hover:bg-transparent
            disabled:cursor-not-allowed disabled:dark:border-uConnectDark-layer3 disabled:dark:text-uConnectDark-textSub disabled:border-uConnectLight-layer3 disabled:text-uConnectLight-textSub"
          >
            Chat
          </button>
        </div>
      </div>
    </div>
  );
}

function AddMembers({
  isVisible,
  setIsVisible,
  accounts,
  setIsActive,
  setChatNameData,
  active,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const popupRef = useRef(null); // Reference to the popup container

  // Filter accounts based on search term
  const filteredAccounts = accounts.filter((account) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      account.chatName.toLowerCase().includes(lowerSearchTerm) &&
      !selectedOptions.some((option) => option.label === account.chatName) && // Avoid showing already selected accounts
      !accounts[active].members.some(
        (member) => member.name === account.chatName
      )
    );
  });

  // Close the popup if clicked outside
  useEffect(() => {
    if (isVisible) {
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          setIsVisible(false); // Close popup if clicked outside
          setSelectedOptions([]);
        }
      };

      // Add event listener on mount
      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup event listener on unmount
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isVisible, setIsVisible]);

  const handleAddAccount = (account) => {
    setSelectedOptions((prev) => [
      ...prev,
      { value: account.chatName, label: account.chatName },
    ]);
    setSearchTerm(""); // Reset the search term when adding a tag
  };

  const renderTags = () => {
    if (selectedOptions.length <= 0) return null;
    return selectedOptions.map((option) => (
      <span
        key={option.value}
        className="bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary border-2 border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain px-4 rounded-full inline-flex justify-between items-center overflow-hidden whitespace-nowrap"
      >
        {option.label}
        <button
          type="button"
          className="text-uConnectLight-textMain dark:text-uConnectDark-textMain ml-4"
          onClick={() => removeOption(option)}
        >
          &#x2715;
        </button>
      </span>
    ));
  };

  // Remove selected option (tag)
  const removeOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((item) => item.value !== option.value)
    );
  };

  if (!isVisible) return null; // Don't render the popup if it's not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
      <div
        ref={popupRef} // Attach ref to the popup container
        className="flex flex-col bg-white relative dark:bg-uConnectDark-layer2Primary rounded-lg h-1/2 w-1/4 p-5 shadow-lg"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-uConnectDark-accent dark:text-uConnectLight-accent"
        >
          &#x2715;
        </button>
        <div className="pb-5">Add Member</div>
        <div className="flex items-center border-b-2 border-uConnectLight-accent pb-3 mb-4">
          <div className="pr-2">Adding: </div>
          <div className="grid grid-cols-2 gap-2">
            {renderTags()}
            <input
              type="text"
              placeholder="Search accounts"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent outline-none dark:text-uConnectDark-textMain text-uConnectLight-textMain"
            />
          </div>
        </div>
        <div className="max-h-full overflow-y-auto flex-grow">
          {filteredAccounts.length > 0 ? (
            filteredAccounts.map(
              (account, index) =>
                !account.memberCount && (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-3 hover:bg-uConnectLight-layer1Primary dark:hover:bg-uConnectDark-layer1Primary rounded-lg cursor-pointer"
                  >
                    <div className="flex relative items-center gap-4">
                      <img
                        src={account.image}
                        alt={`${account.chatName}`}
                        className="w-12 h-12 rounded-full border-2 border-[#131313] object-cover"
                      />
                      <div>
                        <p className="text-uConnectLight-textMain dark:text-uConnectDark-textMain font-semibold">
                          {account.chatName}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddAccount(account)}
                      className="text-uConnectDark-accent dark:text-uConnectLight-accent hover:underline"
                    >
                      Add
                    </button>
                  </div>
                )
            )
          ) : (
            <p className="text-center text-uConnectDark-accent dark:text-uConnectLight-accent">
              No results found
            </p>
          )}
        </div>
        <div>
          <button
            disabled={selectedOptions.length == 0}
            onClick={() => {
              setIsVisible(false);
              setSelectedOptions([]);

              // For multiple selections, gather images based on selected accounts from the accounts array
              const selectedImages = selectedOptions
                .map((option) => {
                  // Find the account in the accounts array that matches the selected option's chatName
                  const account = accounts.find(
                    (acc) => acc.chatName === option.label
                  );
                  return account
                    ? { name: option.label, profile: account.image }
                    : null; // Return the image or null if not found
                })
                .filter((image) => image !== null); // Remove any null values in case an account wasn't found

              accounts[active].members = [
                ...accounts[active].members,
                ...selectedImages,
              ];
              // Update the chatNameData state with the new group entry
              setChatNameData((prevData) =>
                prevData.map((group) =>
                  group.label === accounts[active].label // Match the group to update
                    ? {
                        ...group,
                        members: accounts[active].members, // Update the members array with new members
                        memberCount: accounts[active].members.length, // Update member count
                      }
                    : group
                )
              );
            }}
            className="mt-4 w-full px-4 py-2 border border-uConnectDark-accent text-uConnectLight-textMain dark:text-uConnectDark-textMain rounded-full 
            hover:bg-uConnectDark-accent hover:text-uConnectDark-textMain hover:dark:text-uConnectLight-textMain disabled:hover:bg-transparent
            disabled:cursor-not-allowed disabled:dark:border-uConnectDark-layer3 disabled:dark:text-uConnectDark-textSub disabled:border-uConnectLight-layer3 disabled:text-uConnectLight-textSub"
          >
            Add To Chat
          </button>
        </div>
      </div>
    </div>
  );
}

function Chat({ Name, Profile, Members, Notification, Active, accounts }) {
  const nameColor = Notification
    ? "text-uConnectDark-accent"
    : "dark:text-uConnectDark-textMain text-uConnectLight-textMain transition  ";

  const activeIndex = accounts.findIndex(
    (account) => account.chatName === Name
  );

  const borderActive =
    activeIndex === Active
      ? "border-2 border-uConnectLight-accent bg-uConnectLight-layer2Secondary transition   dark:bg-uConnectDark-layer2Secondary"
      : "";
  return (
    <div className={`${borderActive}`}>
      <div
        className={`flex flex-row justify-start items-center border-b p-3 gap-4 border-uConnectLight-layer3 transition   dark:border-uConnectDark-layer3 font-semibold ${nameColor}`}
      >
        <div className="relative w-12 h-12">
          {Notification && (
            <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-uConnectLight-accent text-xs text-uConnectLight-layer1 transition   dark:text-uConnectDark-layer1 rounded-full px-2">
              {Notification}
            </span>
          )}
          {Members &&
            Profile.slice(0, 2).map((profileImg, index) => (
              <img
                key={index}
                src={profileImg}
                alt={`${Name} - Profile ${index + 1}`}
                className={`absolute w-8 h-8 rounded-full border-2 border-[#131313] object-cover`}
                style={{
                  left: `${index * 15}px`, // Adjust horizontal overlap
                  top: `${index * 15}px`, // Adjust vertical overlap
                  zIndex: index, // Control stack order of images
                }}
              />
            ))}
          {!Members && (
            <img
              src={Profile}
              alt={`${Name}`}
              className={`w-12 h-12 rounded-full border-2 border-[#131313] object-cover`}
            />
          )}
        </div>
        <div className="flex flex-col items-start">
          {/* Limit the Name to 15 characters and append '...' if longer */}
          <span>{Name.length > 15 ? `${Name.slice(0, 15)}...` : Name}</span>

          {Members && (
            <span className="text-xs text-uConnectLight-textSub transition dark:text-uConnectDark-textSub">
              {Members} Members
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
