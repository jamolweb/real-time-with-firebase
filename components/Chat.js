"use client";
// components/Chat.js
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        createdAt: new Date(),
      });
      setNewMessage("");
    }
  };

  return (
    <div>
      <div
        style={{
          height: "400px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {messages.map((message) => (
          <div key={message.id} style={{ marginBottom: "10px" }}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSendMessage}
        style={{ display: "flex", marginTop: "10px" }}
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          style={{ flexGrow: 1, padding: "10px", color: "black" }}
        />
        <button type="submit" style={{ padding: "10px" }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
