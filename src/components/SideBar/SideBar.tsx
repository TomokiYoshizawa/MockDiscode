import React from "react";

import Channel from "../Channel/Channel";

import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

import "./SideBar.scss";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__left">
        <div className="sidebar__icon-box">
          <img
            src="../../../public/vite.svg"
            alt="icon"
            className="sidebar__icon"
          />
        </div>
        <div className="sidebar__icon-box">
          <img
            src="../../../public/vite.svg"
            alt="icon"
            className="sidebar__icon"
          />
        </div>
      </div>
      {/* {Sidebar-right} */}
      <div className="sidebar__right">
        <div className="sidebar__right--top">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        {/* Sidebar-channels */}
        <div className="sidebar__channel">
          <div className="sidebar__channel-container">
            <div className="sidebar__channel-header">
              <ExpandMoreIcon />
              <h4>Programming Channels</h4>
            </div>
            <AddIcon className="sidebar_channel-icon" />
          </div>
          <div className="sidebar__channel-list">
            <Channel />
          </div>
          <div className="sidebar__footer">
            <div className="sidebar__footer-account">
              <img
                // src="../../../public/image/tomoki-profile.jpg"
                alt="icon"
                className="sidebar__footer-icon"
              />
              <div className="sidebar__footer-name--box">
                <h4>tomoki</h4>
              </div>
            </div>
            <div className="sidebar__voice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
