// src/components/pages/ChatPage.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaPlusCircle,
  FaSmile,
  FaPaperclip,
  FaPaperPlane,
} from "react-icons/fa";
import MultiSelectDropdown from "../MultiSelectDropdown";

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

// Define featured users array
const chatNameData = [
  {
    chatName: "Rashida Williams",
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
];

export default function ChatPage() {
  const [active, setIsActive] = useState(0);

  return (
    <div className="block min-h-screen bg-uConnectLight-background dark:bg-uConnectDark-background text-uConnectLight-textMain dark:text-uConnectDark-textMain">
      <ChatSideBar
        active={chatNameData[active].chatName}
        setIsActive={setIsActive}
      />
      <ChatHeader chatName={chatNameData[active].chatName} />
      <div className="pb-32 pt-28 flex justify-end min-h-screen flex-col">
        {chatNameData[active].conversationData && (
          <Conversation
            conversationData={chatNameData[active].conversationData}
          />
        )}
      </div>
      <SendText />
    </div>
  );
}

function SendText() {
  return (
    <div className="flex fixed bottom-0 pb-10 w-screen dark:bg-uConnectDark-background bg-uConnectLight-background">
      <div className="flex flex-row justify-center items-center border-2 rounded-full text-lg pl-4 border-uConnectDark-accent ml-96 w-3/4 bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary">
        <input
          type="text"
          placeholder="Type Message"
          className="bg-transparent placeholder:text-lg placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none w-full pr-2 m-3"
        />
        <div className="flex flex-row gap-5 mr-10">
          <FaSmile className="text-uConnectLight-textSub dark:text-uConnectDark-layer3" />
          <FaPaperclip className="text-uConnectLight-textSub dark:text-uConnectDark-layer3" />
          <FaPaperPlane className="text-uConnectLight-textSub dark:text-uConnectDark-layer3" />
        </div>
      </div>
    </div>
  );
}

function Conversation({ conversationData }) {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the messages
    endOfMessagesRef.current?.scrollIntoView();
  }, [conversationData]);

  return conversationData.map((conversation) => {
    return (
      <div className="ml-72 pt-10">
        <div className="flex flex-row gap-5 max-w-7xl m-auto ">
          <img
            src={conversation.profile}
            alt={`${conversation.name}`}
            className={`w-16 h-16 rounded-full border-2 border-[#131313] object-cover`}
          />
          <div className="flex flex-col justify-center">
            <span className="tracking-wider font-bold text-xl">
              {conversation.name}
              <span className="font-thin text-xs tracking-normal ml-5 dark:text-uConnectDark-textSub text-uConnectLight-textSub">
                {conversation.timestamp}
              </span>
            </span>
            <span>{conversation.message}</span>
          </div>
        </div>
        <div ref={endOfMessagesRef} />
      </div>
    );
  });
}

function ChatHeader({ chatName }) {
  return (
    <div className="pt-10 pb-5 text-center fixed w-full dark:bg-uConnectDark-background bg-uConnectLight-background ">
      <div className="flex flex-row justify-between">
        <div className="flex border-2 rounded-full border-uConnectDark-accent ml-80 bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary">
          <div className="m-3 flex items-center ">
            <FaSearch className="text-uConnectDark-accent" />{" "}
            {/* Search Icon */}
          </div>
          <input
            type="text"
            placeholder="Search Chat"
            className="bg-transparent placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none w-full pr-2"
          />
        </div>
        <div className="flex border-2 rounded-full border-uConnectDark-accent mr-8 bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary">
          <div className="m-3 flex items-center ">
            <FaPlusCircle className="text-uConnectDark-accent" />{" "}
          </div>
          <button className="text-uConnectLight-textSub dark:text-uConnectDark-layer3 w-52 text-start">
            Add Members
          </button>
        </div>
      </div>
      <div className="text-uConnectDark-accent text-2xl ml-72 font-bold tracking-wider">
        {chatName}
      </div>
    </div>
  );
}

function ChatSideBar({ active, setIsActive }) {
  return (
    <div className="fixed ml-20 bg-uConnectLight-layer2Primary dark:bg-uConnectDark-layer2Primary min-h-screen w-56 z-10">
      <div className="flex border-2 rounded-full border-uConnectDark-accent m-5">
        <div className="m-3 flex items-center ">
          <FaSearch className="text-uConnectDark-accent" /> {/* Search Icon */}
        </div>
        <input
          type="text"
          placeholder="Find Conversation"
          className="bg-transparent placeholder-uConnectLight-textSub dark:placeholder-uConnectDark-layer3 outline-none w-full pr-2"
        />
      </div>{" "}
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
    </div>
  );
}

function Chat({ Name, Profile, Members, Notification, Active }) {
  const nameColor = Notification
    ? "text-uConnectDark-accent"
    : "dark:text-uConnectDark-textMain text-uConnectLight-textMain";

  const borderActive = Active
    ? "border-2 border-uConnectLight-accent bg-uConnectLight-layer2Secondary dark:bg-uConnectDark-layer2Secondary"
    : "";
  return (
    <div className={`${borderActive}`}>
      <div
        className={`flex flex-row justify-start items-center border-b p-3 gap-4 border-uConnectLight-layer3 dark:border-uConnectDark-layer3 font-semibold ${nameColor}`}
      >
        <div className="relative w-12 h-12">
          {Notification && (
            <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-uConnectLight-accent text-xs text-uConnectLight-layer1 dark:text-uConnectDark-layer1 rounded-full px-2">
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
            <span className="text-xs text-uConnectLight-textSub dark:text-uConnectDark-textSub">
              {Members} Members
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
