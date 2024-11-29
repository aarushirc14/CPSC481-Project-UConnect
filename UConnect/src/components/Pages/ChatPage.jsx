// src/components/pages/ChatPage.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaPlusCircle,
  FaSmile,
  FaPaperclip,
  FaPaperPlane,
  FaTimesCircle,
} from "react-icons/fa";
import MultiSelectDropdown from "../MultiSelectDropdown";
import EmojiPicker from "emoji-picker-react";

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
import { majorOptions } from "../../data/dropdownOptions";

export default function ChatPage() {
  const [active, setIsActive] = useState(0);

  // Define featured users array
  const [chatNameData, setChatNameData] = useState([
    {
      chatName: "Rashida Williams",
      label: "Rashida Williams",
      value: "rashida_williams",
      image: rashidaWilliams,
      notification: 2,
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
      chatName: "Saul Alvarez",
      label: "Saul Alvarez",
      value: "saul_alvarez",
      image: saulAlvarez,
      notification: 1,
      conversationData: [
        {
          name: "Saul Alvarez",
          message:
            "I saw you in class today! How’s the programming assignment going?",
          profile: saulAlvarez,
          timestamp: "Yesterday at 9:30pm",
        },
        {
          name: "Sofia Martinez",
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
          name: "Sofia Martinez",
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
            "I totally get that. Math exams are always stressful. Have you started reviewing the practice problems?",
          profile: aaronPatel,
          timestamp: "Today at 6:15pm",
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
          name: "You",
          message:
            "Haha, true! I’ll try to relax a little before we meet. Thanks again for offering to help, I really appreciate it!",
          profile: sofiaMartinez,
          timestamp: "Today at 7:20pm",
        },
        {
          name: "Aaron Patel",
          message:
            "No problem, happy to help! Don’t stress too much. We’ll get through it together!",
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
      chatName: "Tracy Smith",
      label: "Tracy Smith",
      value: "tracy_smith",
      image: tracySmith,
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

  return (
    <div className="block min-h-screen bg-uConnectLight-background transition   dark:bg-uConnectDark-background text-uConnectLight-textMain dark:text-uConnectDark-textMain">
      <ChatSideBar
        active={chatNameData[active].chatName}
        setIsActive={setIsActive}
        chatNameData={chatNameData}
      />
      <ChatHeader
        chatName={chatNameData[active].chatName}
        setSearch={setSearch}
        search={search}
        message={message}
        setMessage={setMessage}
      />
      <div className="flex justify-center">
        <div
          className={`pb-32 pt-28 flex min-h-screen flex-col w-1/2 ${
            !search ? "justify-end" : ""
          }`}
        >
          {chatNameData[active].conversationData && (
            <Conversation
              conversationData={chatNameData[active].conversationData}
              chatNameData={chatNameData}
              search={search}
              setSearch={setSearch}
              setMessage={setMessage}
            />
          )}
        </div>
      </div>
      {chatNameData[active].conversationData && !search && (
        <SendText
          chatNameData={chatNameData}
          setChatNameData={setChatNameData}
          activeChat={active}
        />
      )}
    </div>
  );
}

function SendText({ chatNameData, setChatNameData, activeChat }) {
  const [message, setMessage] = useState(""); // Track the message input

  const handleSendMessage = () => {
    if (message.trim() === "") return; // Prevent empty messages

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

    const newMessage = {
      name: "You",
      message: message,
      profile: sofiaMartinez,
      timestamp: "Today at " + formattedTime,
    };

    // Update the chat data for the active chat
    const updatedChatData = [...chatNameData];
    updatedChatData[activeChat].conversationData.push(newMessage);
    setChatNameData(updatedChatData);

    // Clear the input field
    setMessage("");
  };

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  {
    /* Update Comment Input to include Emoji */
  }
  const onEmojiClick = (emojiData, event) => {
    setMessage((prevInput) => prevInput + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="flex fixed bottom-0 pb-10 w-screen transition   dark:bg-uConnectDark-background bg-uConnectLight-background">
      <div className="flex flex-row justify-center items-center border-2 rounded-full text-lg pl-4 border-uConnectDark-accent ml-96 w-3/4 bg-uConnectLight-layer2Primary transition   dark:bg-uConnectDark-layer2Primary">
        <input
          type="text"
          placeholder="Type Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          className="bg-transparent placeholder:text-lg placeholder-uConnectLight-textSub transition   dark:placeholder-uConnectDark-layer3 outline-none w-full pr-2 m-3"
        />
        <div className="flex flex-row gap-5 mr-10">
          <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
            <FaSmile className="text-uConnectLight-textSub transition   dark:text-uConnectDark-layer3 hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent" />
          </button>
          {showEmojiPicker && (
            <div className="rounded-lg absolute z-auto right-20 pt-1.5 bottom-24">
              <EmojiPicker onEmojiClick={onEmojiClick} theme="auto" />
            </div>
          )}
          <FaPaperclip className="text-uConnectLight-textSub transition   dark:text-uConnectDark-layer3 hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent" />
          <FaPaperPlane
            className="text-uConnectLight-textSub transition   dark:text-uConnectDark-layer3 cursor-pointer hover:dark:text-uConnectDark-accent hover:text-uConnectLight-accent"
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
}

function Conversation({
  conversationData,
  chatNameData,
  search,
  setSearch,
  setMessage,
}) {
  const endOfMessagesRef = useRef(null);

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

  return filteredConversations.length > 0 || !search ? (
    filteredConversations.map((conversation, index) => {
      return (
        <div className="pt-5">
          <div
            className={`flex flex-row gap-5 max-w-7xl m-auto p-2 ${
              search
                ? "hover:dark:bg-uConnectDark-layer2Primary hover:bg-uConnectLight-layer2Primary transition  "
                : ""
            }`}
            onClick={() => {
              setSearch("");
              setMessage("");
            }}
          >
            <img
              src={conversation.profile}
              alt={`${conversation.name}`}
              className={`w-16 h-16 rounded-full border-2 border-[#131313] object-cover`}
            />
            <div className="flex flex-col justify-center">
              <span className="tracking-wider font-bold text-xl">
                {conversation.name}
                <span className="font-thin text-xs tracking-normal ml-5 transition   dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                  {conversation.timestamp}
                </span>
              </span>
              <span>{highlightSearchTerm(conversation.message, search)}</span>
            </div>
          </div>
          <div ref={endOfMessagesRef} />
        </div>
      );
    })
  ) : (
    <div className="text-uConnectDark-accent text-2xl ml-72 text-center font-bold tracking-wider pt-10">
      No results found
    </div>
  );
}

function ChatHeader({ chatName, setSearch, search, message, setMessage }) {
  const handleSearchMessage = () => {
    if (message.trim() === "") return; // Prevent empty messages
    setSearch(message);
  };

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
      <div className="text-uConnectDark-accent text-2xl ml-72 font-bold tracking-wider">
        {search ? 'Search Results for: "' + message + '"' : chatName}
      </div>
    </div>
  );
}

function ChatSideBar({ active, setIsActive, chatNameData }) {
  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <div className="fixed ml-20 bg-uConnectLight-layer2Primary transition   dark:bg-uConnectDark-layer2Primary min-h-screen w-56 z-10">
      <div className="flex border-2 rounded-full border-uConnectDark-accent m-5 justify-center items-center">
        <button
          onClick={() => setPopupVisible(true)}
          className=" flex flex-row justify-evenly items-center bg-transparent text-uConnectLight-accent transition dark:text-uConnectDark-layer3 outline-none w-full m-2"
        >
          New Message
          <FaPlusCircle className="text-uConnectDark-accent h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-col">
        {chatNameData.map((chat, index) => (
          <button onClick={() => setIsActive(index)}>
            <Chat
              Name={chat.chatName}
              Profile={chat.image}
              Members={chat.memberCount}
              Notification={chat.notification}
              Active={active == chat.chatName}
            />
          </button>
        ))}
      </div>
      <AccountPopup
        isVisible={isPopupVisible}
        setIsVisible={setPopupVisible}
        accounts={chatNameData}
      />
    </div>
  );
}

function AccountPopup({ isVisible, setIsVisible, accounts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const popupRef = useRef(null); // Reference to the popup container

  // Filter accounts based on search term
  const filteredAccounts = accounts.filter((account) =>
    account.chatName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        className="bg-white relative dark:bg-uConnectDark-layer2Primary rounded-lg h-96 w-96 p-5 shadow-lg"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-uConnectDark-accent dark:text-uConnectLight-accent"
        >
          X
        </button>
        <div className="pb-5">New Message</div>
        <div className="flex items-center border-b-2 border-uConnectLight-accent pb-3 mb-4">
          <div className="pr-2">To: </div>
          <input
            type="text"
            placeholder="Search accounts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent outline-none dark:text-uConnectDark-textMain text-uConnectLight-textMain"
          />
        </div>
        <div className="max-h-64 overflow-y-auto">
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
                    <button className="text-uConnectDark-accent dark:text-uConnectLight-accent">
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
      </div>
    </div>
  );
}

{
  /* <button
          className="text-uConnectLight-textSub transition   dark:text-uConnectDark-layer3 w-10 items-center"
          onClick={() => {
            const newEntry = {
              chatName: "CPSC 481",
              label: "CPSC 481",
              value: "cpsc_481",
              image: [tracySmith, alexJones],
              memberCount: 4,
              conversationData: [],
            };

            // Update the chatNameData state with the new entry
            setChatNameData((prevData) => [...prevData, newEntry]);
          }}
        >
          <FaPlusCircle className="text-uConnectDark-accent" />{" "}
        </button> */
}

function Chat({ Name, Profile, Members, Notification, Active }) {
  const nameColor = Notification
    ? "text-uConnectDark-accent"
    : "dark:text-uConnectDark-textMain text-uConnectLight-textMain transition  ";

  const borderActive = Active
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
            Profile.map((profileImg, index) => (
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
          {Name}
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
