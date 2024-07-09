import React, { useState } from "react";
import "../chat/chat.css";
import EmojiPicker from "emoji-picker-react";

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo eum mollitia tempore, non placeat magni.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo eum mollitia tempore, non placeat magni.
            </p>
            <span>1 min ago</span>
          </div>
        </div>{" "}
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo eum mollitia tempore, non placeat magni.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo eum mollitia tempore, non placeat magni.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo eum mollitia tempore, non placeat magni.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/19020136/pexels-photo-19020136/free-photo-of-deniz-kayalar-dalgalar-el-sallamak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo eum mollitia tempore, non placeat magni.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Type a message..."
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
