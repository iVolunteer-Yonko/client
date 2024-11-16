import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext"; // Update this import
import io from "socket.io-client";
import axios from "axios";
import UserList from "./UserList";
import MessageList from "./MessageList";
import GroupList from "./GroupList";
import "./Chat.css";

const socket = io("http://localhost:5000");

function Chat() {
  const { user } = useAuth(); // Replace useContext(AuthContext) with useAuth()
  // Since token wasn't exported in our AuthContext, you might need to get it from localStorage
  const token = localStorage.getItem("token"); // Add this if you're storing token in localStorage

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);

  // Rest of your code remains the same...

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Fetch users and groups
    fetchUsers();
    fetchGroups();

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Fetch users and groups
    fetchUsers();
    fetchGroups();

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    if (selectedUser) {
      fetchPrivateMessages(selectedUser._id);
      socket.emit("join", `private_${selectedUser._id}`);
    } else if (selectedGroup) {
      fetchGroupMessages(selectedGroup._id);
      socket.emit("join", `group_${selectedGroup._id}`);
    }
  }, [selectedUser, selectedGroup]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data.filter((u) => u._id !== user._id));
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const fetchGroups = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/groups", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGroups(res.data);
    } catch (err) {
      console.error("Error fetching groups:", err);
    }
  };

  const fetchPrivateMessages = async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/messages/private/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessages(res.data);
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  const fetchGroupMessages = async (groupId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/messages/group/${groupId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessages(res.data);
    } catch (err) {
      console.error("Error fetching group messages:", err);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const messageData = {
      content: newMessage,
      sender: user._id,
      room: selectedUser
        ? `private_${selectedUser._id}`
        : `group_${selectedGroup._id}`,
    };

    try {
      await axios.post(
        "http://localhost:5000/api/messages",
        {
          content: newMessage,
          receiver: selectedUser?._id,
          groupId: selectedGroup?._id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      socket.emit("message", messageData);
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="chat-container">
      <div className="sidebar">
        <UserList
          users={users}
          selectedUser={selectedUser}
          onSelectUser={(user) => {
            setSelectedUser(user);
            setSelectedGroup(null);
          }}
        />
        <GroupList
          groups={groups}
          selectedGroup={selectedGroup}
          onSelectGroup={(group) => {
            setSelectedGroup(group);
            setSelectedUser(null);
          }}
        />
      </div>
      <div className="chat-main">
        <div className="chat-header">
          {selectedUser ? selectedUser.username : selectedGroup?.name}
        </div>
        <MessageList messages={messages} currentUser={user} />
        <form onSubmit={sendMessage} className="message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
