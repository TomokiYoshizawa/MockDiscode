import React from "react";

import ChatHeader from "../ChatHeader/ChatHeader";
import Message from "../Message/Message";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import "./Chat.scss";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__message">
        <Message />
      </div>
      <div className="chat__input">
        <AddCircleOutlineIcon />
        <form className="chat__input-form">
          <input
            type="text"
            placeholder="message"
            className="chat__input-box"
          />
          <button type="submit" className="chat__input--btn">
            Send
          </button>
        </form>
        <div className="chat__input-icon">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
