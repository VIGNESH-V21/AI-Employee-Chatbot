"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = () => {
    setReply("Thinking...");

    setTimeout(() => {
      setReply("Hello! I am your AI Employee Chatbot 🤖");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        AI Employee Chatbot
      </h1>

      <input
        type="text"
        className="border border-gray-300 p-3 rounded w-full max-w-md"
        placeholder="Ask something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-6 py-3 rounded mt-4 hover:bg-blue-700"
      >
        Send
      </button>

      <div className="bg-white shadow-md rounded p-4 mt-6 w-full max-w-md min-h-[80px]">
        {reply}
      </div>
    </div>
  );
}