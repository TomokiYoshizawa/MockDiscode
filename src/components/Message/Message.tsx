import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./Message.scss";

function Message() {
  return (
    <div className="message">
      <AccountCircleIcon />
      <div className="message__info">
        <h4>
          tomoki <span className="message__timestamp">timestamp</span>
        </h4>
        <p>message here</p>
      </div>
    </div>
  );
}

export default Message;
