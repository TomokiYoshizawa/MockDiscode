import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

import "./ChatHeader.scss";

type Props = {
  channelName: string | null;
};

function ChatHeader(props: Props) {
  const { channelName } = props;
  return (
    <div className="chat-header">
      <div className="chat-header__left">
        <h3>
          <span>#</span>
          {channelName}
        </h3>
      </div>
      <div className="chat-header__right">
        <CircleNotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className="chat-header__search">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpCenterIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
