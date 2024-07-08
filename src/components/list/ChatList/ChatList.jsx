import React, { useState } from "react";
import "../ChatList/chatlist.css";

function ChatList() {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "/plus.png"}
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello!</p>
        </div>
      </div>
      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello!</p>
        </div>
      </div>
      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello!</p>
        </div>
      </div>
      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello!</p>
        </div>
      </div>
      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello!</p>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
