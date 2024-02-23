import Channel from "../Channel/Channel";

import { auth, db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import { addDoc, collection } from "firebase/firestore";
import useCollection from "../../hooks/useCollection";

import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

import "./SideBar.scss";

function SideBar() {
  const user = useAppSelector((state) => state.user.user);
  const { documents: channels } = useCollection("Channels");

  const addChannel = async () => {
    const channelName: string | null = prompt("Enter the channel name");

    if (channelName) {
      await addDoc(collection(db, "Channels"), {
        channelName: channelName,
      });
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__left">
        <div className="sidebar__icon-box">
          <img
            src="../../../public/image/discordIcon.png"
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
            <AddIcon className="sidebar_channel-icon" onClick={addChannel} />
          </div>
          <div className="sidebar__channel-list">
            {channels.map((channel) => (
              <Channel channel={channel} id={channel.id} key={channel.id} />
            ))}
          </div>
          <div className="sidebar__footer">
            <div className="sidebar__footer-account">
              <img
                src={user?.photo}
                alt="icon"
                onClick={() => auth.signOut()}
                className="sidebar__footer-icon"
              />
              <div className="sidebar__footer-name--box">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
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
